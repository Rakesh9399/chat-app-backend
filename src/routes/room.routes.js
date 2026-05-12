import express from "express";

import {
  createRoom,
  joinRoom,
  getMessages,
} from "../controllers/room.controller.js";

const router = express.Router();


// Create Room
router.post("/", createRoom);


// Join Room
router.get("/:roomId", joinRoom);


// Get Messages
router.get("/:roomId/messages", getMessages);


export default router;