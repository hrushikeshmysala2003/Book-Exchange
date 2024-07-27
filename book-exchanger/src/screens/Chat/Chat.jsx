import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const Chat = () => {
  const socket = useMemo(() => io("http://localhost:5000"), []);
  const [messageSender, setMessageSender] = useState("");
  const [message, setMessage] = useState("");
  const { roomId } = useParams();
  const { user } = useSelector((state) => state.user);

  const messageSendHandler = (e) => {
    e.preventDefault();
    socket.emit("send-message", message);
  };
  console.log(user);

  useEffect(() => {
    console.log(roomId);

    socket.on("connect", () => {
      console.log("Connected", socket.id);
      socket.emit("joinRoom", roomId);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <form>
        <input
          type="text"
          onKeyUp={(e) => (e.key === "Enter" ? messageSendHandler(e) : null)}
          onClick={(e) => setMessage(e.target.value)}
        />
        <button onClick={(e) => messageSendHandler(e)} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Chat;
