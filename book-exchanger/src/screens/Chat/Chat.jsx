import React, { useEffect, useMemo } from "react";
import io from "socket.io-client";

const Chat = () => {
  const socket = useMemo(() => io("http://localhost:5000"), []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected", socket.id);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Chat</div>;
};

export default Chat;
