const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
  admin: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Chat must have a admin"],
  },
  roomName: {
    type: mongoose.Schema.ObjectId,
    ref: "Book",
    required: [true, "Chatroom must have a room name"],
  },
  messages: [
    {
      senderId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Message must have a sender name"],
      },
      senderName: {
        type: String,
        required: [true, "Message must have a sender name"],
      },
      text: {
        type: String,
        required: [true, "Message must have text"],
      },
    },
  ],
});

module.exports = mongoose.model("Chat", chatSchema);
