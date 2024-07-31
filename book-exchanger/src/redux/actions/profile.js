import axios from "axios";
import { server } from "../store";

export const myBooks = (userId) => async (dispatch) => {
  try {
    dispatch({ type: "getMyBooksRequest" });

    const { data } = await axios.get(`${server}/mybooks`, {
      withCredentials: true,
    });
    console.log(data);
    dispatch({
      type: "getMyBooksSuccess",
      payload: {
        message: "Fetched your books succesfully",
        mybooks: data.mybooks,
      },
    });
  } catch (error) {
    dispatch({ type: "getMyBooksFail", payload: error.response.data.message });
  }
};

export const getUserProfile = (userId) => async (dispatch) => {
  try {
    dispatch({ type: "getUserProfileRequest" });
    const { data } = await axios.post(
      `${server}/getUserProfile`,
      {
        userId,
      },
      { withCredentials: true }
    );

    console.log(data);
    dispatch({
      type: "getUserProfileSuccess",
      payload: {
        message: "User fetched Successfully",
        userProfile: data,
      },
    });
  } catch (error) {
    dispatch({
      type: "getUserProfileFail",
      payload: error.response.data.message,
    });
  }
};

export const updateProfile = (name, email) => async (dispatch) => {
  try {
    dispatch({ type: "updateProfileRequest" });

    const { data } = await axios.put(
      `${server}/updateprofile`,
      {
        name,
        email,
      },
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "updateProfileSuccess",
      payload: { message: data.message },
    });
  } catch (err) {
    dispatch({
      type: "updateProfileFail",
      payload: err.response.data.message,
    });
  }
};
