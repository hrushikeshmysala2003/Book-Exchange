import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../redux/actions/profile";
import Navbar from "../../components/Navbar";

const UserProfile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { loading, userProfile, message } = useSelector(
    (state) => state.profile
  );

  const user = userProfile.user;
  console.log(user);

  useEffect(() => {
    dispatch(getUserProfile(userId));
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="max-h-screen pt-20">
        <div className="flex justify-center  md:pt-24 m-2 sm:m-5 p-2 font-bold text-lg ">
          <div>
            <div className="flex justify-center m-5 sm:m-8 ">
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
      </div>
    </div>
  );
};

export default UserProfile;
