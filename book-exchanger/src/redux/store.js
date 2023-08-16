import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./reducers/userReducer"
import { profileReducer } from "./reducers/profileReducer"
import { bookReducer } from "./reducers/bookReducer"


export const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        book: bookReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export const server = "http://localhost:5000/api/v1"
