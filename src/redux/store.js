import { configureStore } from "@reduxjs/toolkit";
import sneetReducer from "./sneetSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    sneet: sneetReducer,
    user: userReducer,
  },
});
