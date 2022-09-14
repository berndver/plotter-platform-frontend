import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
});

export default store;
