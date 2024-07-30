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
    // setUserName(user.name);
    // setUserId(user._id);
    socket.emit("message", { roomId, user, message });
    setMessage("");
  };

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const element = document.getElementById("messageContainer");
    element.scrollTop = element.scrollHeight;
  }, [messages]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected", socket.id);
      socket.emit("joinRoom", roomId);
    });

    socket.on("receive-message", (chat) => {
      console.log(chat);
      setMessages(chat?.messages);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className=" p-3 h-screen w-screen flex items-center justify-center flex-col">
      <div
        id="messageContainer"
        className=" rounded-md h-full sm:h-2/3 overflow-y-scroll flex flex-col gap-y-2 w-full  py-3 sm:w-1/2 md:w-2/3 lg:w-1/3 border border-blue-400"
      >
        {user?._id && messages ? (
          messages?.map((message, index) => {
            if (message.senderId === user._id) {
              return (
                <div key={message._id} className="flex gap-x-2 justify-end ">
                  <p className="text-sm text-zinc-500 ">{"me"}</p>
                  <p className="bg-blue-200 p-2 rounded-lg w-4/5  ">
                    {message.text}
                  </p>{" "}
                </div>
              );
            } else {
              return (
                <div key={message._id} className="flex gap-x-2">
                  <p className="bg-blue-300 p-2 rounded-lg w-4/5 ">
                    {message.text}
                  </p>{" "}
                  <p className="text-sm text-zinc-500 ">{message.senderName}</p>
                </div>
              );
            }
          })
        ) : (
          <div className="w-full h-full text-2xl text-center ">
            No messages yet
          </div>
        )}
      </div>
      <form className=" rounded-md flex justify-between border border-slate-500 w-full sm:w-1/2 md:w-2/3 lg:w-1/3">
        <input
          className="rounded-md p-2 m-1  w-full "
          type="text"
          value={message}
          onKeyUp={(e) => (e.key === "Enter" ? messageSendHandler(e) : null)}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter the message"
        />
        <br />
        <button
          className="p-3 bg-blue-400 rounded-lg m-1 "
          onClick={(e) => messageSendHandler(e)}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Chat;
