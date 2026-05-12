import Room from "../models/Room.js";

const setupSocket = (io) => {

  io.on("connection", (socket) => {

    console.log("User Connected:", socket.id);


    // Join Room
    socket.on("join-room", (roomId) => {

      socket.join(roomId);

      console.log(`User joined room: ${roomId}`);
    });


    // Send Message
    socket.on("send-message", async (data) => {

      try {

        const {
          roomId,
          sender,
          content,
        } = data;


        const room = await Room.findOne({ roomId });


        if (!room) {
          socket.emit("error", {
            message: "Room not found",
          });

          return;
        }


        const message = {
          sender,
          content,
          timeStamp: new Date(),
        };


        room.messages.push(message);

        await room.save();


        // Send message to all users in room
        io.to(roomId).emit("receive-message", message);

      } catch (error) {

        console.log("Socket Error:", error.message);

      }
    });


    // Disconnect
    socket.on("disconnect", () => {

      console.log("User Disconnected:", socket.id);

    });

  });

};

export default setupSocket;