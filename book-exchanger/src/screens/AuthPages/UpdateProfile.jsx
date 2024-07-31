import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "../../redux/actions/profile";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { loading, message, error } = useSelector((state) => state.profile);

  const updateProfileHandler = (e) => {
    e.preventDefault();
    dispatch(updateProfile(name, email));
    setName("");
    setEmail("");
    navigate("/profile");
  };

  //   useEffect(() => {
  //     if (error) {
  //       toast.error(error);
  //       dispatch({ type: "clearError" });
  //     }
  //     if (message) {
  //       toast.success(message);
  //       dispatch({ type: "clearMessage" });
  //     }
  //   }, [dispatch, message, error]);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <form
        onSubmit={updateProfileHandler}
        className="w-96 p-4 bg-white rounded-lg m-3"
      >
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <button
            type="submit"
            className="border-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white mt-3 p-1.5 rounded-md w-full"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
