import React from "react";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <form className="w-96 p-4 bg-white rounded-lg m-3">
        <h1 className="text-3xl block text-center font-semibold ">
          Update Profile
        </h1>
        <hr className="mt-2 text-lg" />
        <div className="my-3">
          <label htmlFor="name" className="my-3 block text-base mb-2">
            Name :{" "}
          </label>
          <input
            type="text"
            id="name"
            className=" rounded-md border w-full text-base px-2 py-1 focus:outline-none focus:ring focus:border-blue-600"
            placeholder="Enter your Name"
          />
        </div>
        <div className="my-3">
          <label htmlFor="email" className="my-3 block text-base mb-2">
            Email :{" "}
          </label>
          <input
            type="text"
            id="email"
            className=" rounded-md border w-full text-base px-2 py-1 focus:outline-none focus:ring focus:border-blue-600"
            placeholder="Enter Email"
          />
        </div>

        <div>
          <button className="border-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white mt-3 p-1.5 rounded-md w-full">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
