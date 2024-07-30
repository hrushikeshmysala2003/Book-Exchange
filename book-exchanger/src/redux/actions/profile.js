import axios from "axios";
import { server } from "../store";

export const myBooks = (userId) => async (dispatch) => {
  try {
    dispatch({ type: "getMyBooksRequest" });

    const { data } = await axios.get(`${server}/getallbooks`, {
      withCredentials: true,
    });
    console.log(data);
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
