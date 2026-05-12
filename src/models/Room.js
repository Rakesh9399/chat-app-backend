import mongoose from "mongoose";


// Message Schema
const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
    trim: true,
  },

  content: {
    type: String,
    required: true,
    trim: true,
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