import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode only
});

export default appStore;
