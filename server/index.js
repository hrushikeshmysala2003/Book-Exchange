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

  socket.on("joinRoom", async (roomId) => {
    console.log(roomId);
    const chat = await Chat.findOne({ roomName: roomId });
    socket.emit("receive-message", chat);
    socket.join(roomId);
  });

  socket.on("message", async ({ roomId, user, message }) => {
    // console.log({ message, user, roomId });
    if (message.length === 0) return;
    const chat = await Chat.findOne({ roomName: roomId });
    console.log(chat);

    chat.messages.push({
      senderId: user._id,
      senderName: user.name,
      text: message,
    });
    await chat.save();
    io.to(roomId).emit("receive-message", chat);
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
