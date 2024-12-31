import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode only
});

export default appStore;
