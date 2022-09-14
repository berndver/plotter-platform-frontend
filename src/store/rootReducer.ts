import { combineReducers } from "@reduxjs/toolkit";
import authentication from "./authentication/slice";

const rootReducer = combineReducers({
  authentication,
});

export default rootReducer;
