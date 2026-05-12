import mongoose from "mongoose";


// Message Schema
const messageSchema = new mongoose.Schema({

  sender: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    default: "",
  },

  messageType: {
    type: String,
    enum: ["text", "image", "file"],
    default: "text",
  },

  fileUrl: {
    type: String,
    default: "",
  },

  fileName: {
    type: String,
    default: "",
  },

  timeStamp: {
    type: Date,
    default: Date.now,
  },

}, {
  _id: false,
});


// Room Schema
const roomSchema = new mongoose.Schema({

  roomId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  messages: [messageSchema],

}, {
  timestamps: true,
});


const Room = mongoose.model("Room", roomSchema);

export default Room;