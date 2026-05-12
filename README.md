# Realtime Chat App Backend

A scalable realtime chat application backend built with Node.js, Express.js, Socket.IO, and MongoDB.

## Features

- Realtime messaging using Socket.IO
- Room-based chat system
- MongoDB database integration
- REST APIs
- Pagination support
- Scalable folder structure
- Environment variable support
- Error handling middleware
- CORS enabled
- ES Module support

---

# Tech Stack

- Node.js
- Express.js
- Socket.IO
- MongoDB
- Mongoose

---

# Project Structure

```bash
chat-app-backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── sockets/
│   ├── utils/
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
├── nodemon.json
└── index.js
```

---

# Installation

## Clone Repository

```bash
git clone YOUR_REPOSITORY_URL
```

## Move into Project

```bash
cd chat-app-backend
```

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
PORT=8080

MONGO_URI=mongodb://127.0.0.1:27017/chatapp

CLIENT_URL=http://localhost:5173
```

---

# Run Project

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

---

# REST API Endpoints

## Create Room

```http
POST /api/v1/rooms
```

### Request Body

```json
{
  "roomId": "room1"
}
```

---

## Join Room

```http
GET /api/v1/rooms/:roomId
```

Example:

```http
GET /api/v1/rooms/room1
```

---

## Get Messages

```http
GET /api/v1/rooms/:roomId/messages?page=0&size=20
```

Example:

```http
GET /api/v1/rooms/room1/messages?page=0&size=20
```

---

# Socket.IO Events

## Join Room

```javascript
socket.emit("join-room", "room1");
```

---

## Send Message

```javascript
socket.emit("send-message", {
  roomId: "room1",
  sender: "Rakesh",
  content: "Hello World"
});
```

---

## Receive Message

```javascript
socket.on("receive-message", (data) => {
  console.log(data);
});
```

---

# WebSocket Testing with Postman

## Connect URL

```txt
ws://localhost:8080/socket.io/?EIO=4&transport=websocket
```

## Connect Packet

```txt
40
```

## Join Room

```txt
42["join-room","room1"]
```

## Send Message

```txt
42["send-message",{"roomId":"room1","sender":"Rakesh","content":"Hello"}]
```

---

# Deployment

## Recommended Stack

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

# Future Improvements

- JWT Authentication
- Online Users
- Typing Indicator
- Private Chat
- Group Chat
- Message Seen Status
- File Upload
- Voice Messages
- Redis Adapter
- Docker Support

---

# Author

Rakesh Prajapati