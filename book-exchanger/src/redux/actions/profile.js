import axios from "axios";
import { server } from "../store";

export const myBooks = (userId) => async (dispatch) => {
  try {
    dispatch({ type: "getMyBooksRequest" });

    const { data } = await axios.get(`${server}/getallbooks`, {
      withCredentials: true,
    });
    dispatch({
      type: "getMyBooksSuccess",
      payload: {
        message: "Fetched your books succesfully",
        mybooks: data.books,
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
