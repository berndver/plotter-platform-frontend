import { configureStore } from "@reduxjs/toolkit";
import { reducer as authenticationReducer } from "./authentication/slice";

const store = configureStore({
  devTools: true,
  reducer: {
    authentication: authenticationReducer,
  },
});

export default store;
