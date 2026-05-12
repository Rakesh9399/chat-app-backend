import express from "express";
import cors from "cors";
import morgan from "morgan";

import roomRoutes from "./routes/room.routes.js";

import notFound from "./middleware/notFound.middleware.js";
import errorHandler from "./middleware/error.middleware.js";

const app = express();


// Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);


app.use(morgan("dev"));


// Health Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Chat App Backend Running...",
  });
});


// API Routes
app.use("/api/v1/rooms", roomRoutes);


// Not Found Middleware
app.use(notFound);


// Global Error Middleware
app.use(errorHandler);


export default app;