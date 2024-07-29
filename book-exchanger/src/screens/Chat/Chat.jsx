import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const Chat = () => {
  const socket = useMemo(() => io("http://localhost:5000"), []);
  const [message, setMessage] = useState("");
  const { roomId } = useParams();
  const { user } = useSelector((state) => state.user);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  const messageSendHandler = (e) => {
    e.preventDefault();
    setUserName(user.name);
    setUserId(user._id);
    // { roomId, userId, userName, message }
    socket.emit("message", { roomId, userId, userName, message });
    setMessage("");
  };

  // setTimeout(() => {
  //   setUserId(user._id);
  //   setUserName(user.name);
  // }, 5000);

  // console.log(user);
  // setUserName(user.name);
  // setUserId(user._id);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected", socket.id);
      socket.emit("joinRoom", roomId);
    });

    socket.on("receive-message", ({ message, userName, userId }) => {
      console.log(message, userName);
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
          value={message}
          onKeyUp={(e) => (e.key === "Enter" ? messageSendHandler(e) : null)}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button onClick={(e) => messageSendHandler(e)} type="submit">
          Submit
        </button>
      </form>
      <p>
        {userId} {userName}
      </p>
    </div>
  );
};

export default Chat;
