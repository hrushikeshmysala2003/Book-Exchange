import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import "./profile.css"
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { myBooks } from "../../redux/actions/profile";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";

const Profile = ({ user }) => {
  console.log(user);
  const dispatch = useDispatch();

  const { loading, mybook, message, error } = useSelector(
    (state) => state.profile
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      if (message === "User Updated Successfully") {
        window.location.reload(false);
      }
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, message, error]);

  useEffect(() => {
    dispatch(myBooks(user._id));
  }, []);

  console.log(mybook);

  return (
    <div className="">
      <Navbar />
      <div className="max-h-screen pt-20 grid grid-cols-1 md:grid-cols-2 sm:overflow-hidden">
        <div className="flex justify-center  md:pt-8  m-2 sm:m-5 p-2 font-bold text-lg ">
          <div>
            <div className="flex flex-col justify-center m-5 sm:m-8 gap-3 ">
              <div className="w-full flex justify-center">
                <img
                  className="w-48 rounded-full justify-self-center"
                  src={user.avatar.url}
                  alt="Image"
                />
              </div>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Change Profile Picture
              </button>
            </div>
            <p>Name: {user.name}</p>
            <p>email: {user.email}</p>
            <p>created_at: {user.createdAt}</p>
            {user.phoneNumber ? <p>PhoneNumber: {user.phoneNumber}</p> : null}
            <div className=" flex gap-2 ">
              <Link to={"/updateprofile"}>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Update Profile
                </button>
              </Link>
              <Link to={"/changepassword"}>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Change Password
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-h-screen overflow-y-scroll">
          <h2 className="text-3xl font-bold text-center">My Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
            {/* Component */}

            {mybook?.map((oneBook, index) => {
              return (
                <div
                  key={oneBook._id}
                  className="w-60 p-2 m-3 rounded-lg border border-r-2 border-blue-500  justify-self-center "
                >
                  <img
                    className=" object-cover rounded-lg w-full h-32  "
                    src={oneBook.image.url}
                    alt="Image"
                  />
                  <p>Title: {oneBook.title}</p>
                  <p>Author: {oneBook.author}</p>
                  <p>Price: {oneBook.price}</p>
                  <p>Description: {oneBook.description}</p>
                  <Link to={`/chat/${oneBook._id}`}>
                    <button className="rounded-lg w-full bg-blue-400 hover:bg-blue-700">
                      Join chat
                    </button>
                  </Link>
                </div>
              );
            })}

            {/* Component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
