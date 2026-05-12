import Room from "../models/Room.js";


// Create Room
export const createRoom = async (req, res, next) => {
  try {

    const { roomId } = req.body;


    if (!roomId) {
      return res.status(400).json({
        success: false,
        message: "Room ID is required",
      });
    }


    const existingRoom = await Room.findOne({ roomId });


    if (existingRoom) {
      return res.status(400).json({
        success: false,
        message: "Room already exists",
      });
    }


    const room = await Room.create({
      roomId,
    });


    res.status(201).json({
      success: true,
      room,
    });

  } catch (error) {
    next(error);
  }
};


// Join Room
export const joinRoom = async (req, res, next) => {
  try {

    const { roomId } = req.params;


    const room = await Room.findOne({ roomId });


    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }


    res.status(200).json({
      success: true,
      room,
    });

  } catch (error) {
    next(error);
  }
};


// Get Room Messages
export const getMessages = async (req, res, next) => {
  try {

    const { roomId } = req.params;

    const page = Number(req.query.page) || 0;

    const size = Number(req.query.size) || 20;


    const room = await Room.findOne({ roomId });


    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }


    const messages = room.messages;


    const start = Math.max(
      0,
      messages.length - (page + 1) * size
    );

    const end = Math.min(
      messages.length,
      start + size
    );


    const paginatedMessages = messages.slice(start, end);


    res.status(200).json({
      success: true,
      count: paginatedMessages.length,
      messages: paginatedMessages,
    });

  } catch (error) {
    next(error);
  }
};