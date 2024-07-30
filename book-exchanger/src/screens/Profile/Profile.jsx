import React from "react";
import { Link } from "react-router-dom";
// import "./profile.css"
import Navbar from "../../components/Navbar";

const Profile = ({ user }) => {
  console.log(user);
  const book = {
    _id: "66a7b1c0fb23b8dc1e3d9631",
    title: "Computer science",
    author: "Hrushikesh",
    image: {
      public_id: "cs6jfusg7s3d64utcjso",
      url: "https://res.cloudinary.com/dwna7axtx/image/upload/v1694170382/fqbqvpcldfxod5315chj.jpg",
    },
    category: "educational",
    description: "This book will help u",
    price: "1000",
    status: "new",
    user: "64fb0432c35277d057f7640e",
    created_at: { $date: { $numberLong: "1722266048439" } },
    updated_at: { $date: { $numberLong: "1722266048439" } },
    __v: { $numberInt: "0" },
  };
  return (
    <div className="">
      <Navbar />
      <div className="max-h-screen pt-20 grid grid-cols-1 md:grid-cols-2 sm:overflow-hidden">
        <div className="flex justify-center md:pt-24 m-5 p-2 font-bold text-lg ">
          <div>
            <div className="flex justify-center m-8 ">
              <img
                className="w-48 rounded-full "
                src="https://res.cloudinary.com/dwna7axtx/image/upload/v1694172246/tumrwxojjfli9gs5qupc.png"
                alt="Image"
              />
            </div>
            <p>Name: {user.name}</p>
            <p>email: {user.email}</p>
            <p>created_at: {user.createdAt}</p>
          </div>
        </div>

        <div className="max-h-screen overflow-y-scroll">
          <h2 className="text-3xl font-bold text-center">My Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
            {/* Component */}
            <div className="w-60 p-2 m-3 rounded-lg border border-r-2 border-blue-500  justify-self-center ">
              <img className="rounded-lg" src={book.image.url} alt="Image" />
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
              <p>Description: {book.description}</p>
              <Link to={`/chat/${book._id}`}>
                <button className="rounded-lg w-full bg-blue-400 hover:bg-blue-700">
                  Join chat
                </button>
              </Link>
            </div>

            <div className="w-60 p-2 m-3 rounded-lg border border-r-2 border-blue-500 justify-self-center  ">
              <img className="rounded-lg" src={book.image.url} alt="Image" />
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
              <p>Description: {book.description}</p>
              <Link to={`/chat/${book._id}`}>
                <button className="rounded-lg w-full bg-blue-400 hover:bg-blue-700">
                  Join chat
                </button>
              </Link>
            </div>

            <div className="w-60 p-2 m-3 rounded-lg border border-r-2 border-blue-500 justify-self-center  ">
              <img className="rounded-lg" src={book.image.url} alt="Image" />
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
              <p>Description: {book.description}</p>
              <Link to={`/chat/${book._id}`}>
                <button className="rounded-lg w-full bg-blue-400 hover:bg-blue-700">
                  Join chat
                </button>
              </Link>
            </div>

            <div className="w-60 p-2 m-3 rounded-lg border border-r-2 border-blue-500  justify-self-center ">
              <img className="rounded-lg" src={book.image.url} alt="Image" />
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
              <p>Description: {book.description}</p>
              <Link to={`/chat/${book._id}`}>
                <button className="rounded-lg w-full bg-blue-400 hover:bg-blue-700">
                  Join chat
                </button>
              </Link>
            </div>

            <div className="w-60 p-2 m-3 rounded-lg border border-r-2 border-blue-500  justify-self-center ">
              <img className="rounded-lg" src={book.image.url} alt="Image" />
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
              <p>Description: {book.description}</p>
              <Link to={`/chat/${book._id}`}>
                <button className="rounded-lg w-full bg-blue-400 hover:bg-blue-700">
                  Join chat
                </button>
              </Link>
            </div>
            {/* Component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
