import {createReducer} from "@reduxjs/toolkit"

export const profileReducer = createReducer({}, {
    loadUserRequest: (state) => {
        state.loading = true;
    },
    loadUserSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
    },
    loadUserFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
})