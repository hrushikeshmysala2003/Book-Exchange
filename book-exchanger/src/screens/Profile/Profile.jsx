import React from "react";
import { Link } from "react-router-dom";
// import "./profile.css"
import Navbar from "../../components/Navbar";

const Profile = ({ user }) => {
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
      
  );
};

export default Profile;
