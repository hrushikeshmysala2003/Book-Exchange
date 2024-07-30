import { createReducer } from "@reduxjs/toolkit";

export const bookReducer = createReducer(
  {},
  {
    addBookRequest: (state) => {
      state.loading = true;
    },
    addBookSuccess: (state, action) => {
      state.loading = false;
      state.book = action.payload.book;
      state.message = action.payload.message;
    },
    addBookFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
