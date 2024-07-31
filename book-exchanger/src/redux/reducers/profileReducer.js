import { createReducer } from "@reduxjs/toolkit";

export const profileReducer = createReducer(
  {},
  {
    getMyBooksRequest: (state) => {
      state.loading = true;
    },
    getMyBooksSuccess: (state, action) => {
      state.loading = false;
      state.mybook = action.payload.mybooks;
    },
    getMyBooksFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getUserProfileRequest: (state) => {
      state.loading = true;
    },
    getUserProfileSuccess: (state, action) => {
      state.loading = false;
      state.userProfile = action.payload.userProfile;
      state.message = action.payload.message;
    },
    getUserProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateProfileRequest: (state) => {
      state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updateProfileFail: (state, action) => {
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
