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

  const messages = [
    {
      senderId: "64fb0432c35277d057f7640a",
      senderName: "Rahul",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni corporis totam tempore voluptas iusto distinctio corrupti sed incidunt accusantium!",
      _id: "66a70ebc5ca04b4f47eb6c04",
    },
    {
      senderId: "64fb0432c35277d057f7640e",
      senderName: "Hrushikesh",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. corrupti sed incidunt accusantium!",
      _id: "66a70ee50d2c37d78df11306",
    },
    {
      senderId: "64fb0432c35277d057f7640a",
      senderName: "Rahul",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni corporis totam tempore voluptas iusto distinctio corrupti sed incidunt accusantium!",
      _id: "66a70ebc5ca04b4f47eb6c04",
    },
    {
      senderId: "64fb0432c35277d057f7640e",
      senderName: "Hrushikesh",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. corrupti sed incidunt accusantium!",
      _id: "66a70ee50d2c37d78df11306",
    },
    {
      senderId: "64fb0432c35277d057f7640a",
      senderName: "Rahul",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni corporis totam tempore voluptas iusto distinctio corrupti sed incidunt accusantium!",
      _id: "66a70ebc5ca04b4f47eb6c04",
    },
    {
      senderId: "64fb0432c35277d057f7640e",
      senderName: "Hrushikesh",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. corrupti sed incidunt accusantium!",
      _id: "66a70ee50d2c37d78df11306",
    },
    {
      senderId: "64fb0432c35277d057f7640a",
      senderName: "Rahul",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni corporis totam tempore voluptas iusto distinctio corrupti sed incidunt accusantium!",
      _id: "66a70ebc5ca04b4f47eb6c04",
    },
    {
      senderId: "64fb0432c35277d057f7640e",
      senderName: "Hrushikesh",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. corrupti sed incidunt accusantium!",
      _id: "66a70ee50d2c37d78df11306",
    },
  ];

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
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <div className="h-2/3 overflow-y-scroll flex flex-col gap-y-2 w-full py-3 sm:w-1/2 md:w-2/3 lg:w-1/3">
        {user &&
          messages.map((message) => {
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
          })}
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
