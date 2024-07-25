import React from "react";
import { Link } from "react-router-dom";
// import "./profile.css"
import Navbar from "../../components/Navbar";

const Profile = ({ user }) => {
  return (
    <div className="">
      <Navbar />
      <div className="pt-20  ">{user && <div></div>}</div>
    </div>
  );
};

export default Profile;
