import { configureStore } from "@reduxjs/toolkit";
import authentication from "./authentication/reducer";

const store = configureStore({
  devTools: true,
  reducer: {
    authentication,
  },
});

export default store;
