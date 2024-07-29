const app = require("./app");
const port = process.env.PORT || 5000;
const cloudinary = require("cloudinary").v2;
const connetToDB = require("./db");
const Chat = require("./models/Chat");
const { Server } = require("socket.io");
const server = require("http").createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User Connected");
  console.log("ID", socket.id);

  socket.on("joinRoom", (roomId) => {
    console.log(`${socket.id} joined room ${roomId}`);
    // socket.join(roomId);
  });

  socket.on("message", async ({ roomId, userId, userName, message }) => {
    console.log(message);
    const chat = await Chat.findOne({ roomName: roomId });
    console.log(chat);
    chat.messages.push({
      senderId: userId,
      senderName: userName,
      text: message,
    });
    await chat.save();
    io.to(roomId).emit("receive-message", { message, userName, userId });
  });

  socket.on("disconnect", () => {
    console.log("User had left");
  });
});
connetToDB()
  .then(() => {
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    throw err;
  });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
