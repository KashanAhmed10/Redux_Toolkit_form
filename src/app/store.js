import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/PostSlice"
import  usersReducer  from "../features/users/userSlice"


export const store = configureStore({
    reducer: {
        posts: postReducer,
        users:usersReducer

       
    }
})