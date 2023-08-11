import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./reducers/userReducer"
import { profileReducer } from "./reducers/profileReducer"


export const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export const server = "http://localhost:5000/api/v1"
