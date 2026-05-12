import dotenv from "dotenv";
dotenv.config();

import http from "http";
import { Server } from "socket.io";

import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import setupSocket from "./src/sockets/chat.socket.js";


// Database Connection
connectDB();


// Create HTTP Server
const server = http.createServer(app);


// Socket.IO Setup
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true,
  },
});


// Socket Setup
setupSocket(io);


// Server Port
const PORT = process.env.PORT || 8080;


// Start Server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});