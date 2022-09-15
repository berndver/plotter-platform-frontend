import { createReducer } from "@reduxjs/toolkit";
import { AuthenticationSliceState } from "../../types/authentication";
import AuthenticationStatus from "../../constants/authenticationStatus";
import { updateEntity, updateStatus } from "./actions";

const reducer = createReducer<AuthenticationSliceState>(
  {
    status: AuthenticationStatus.Initial,
  },
  (builder) =>
    builder
      .addCase(updateStatus, (state, action) => {
        state.status = action.payload;
      })
      .addCase(updateEntity, (state, action) => {
        state.entity = action.payload;
      })
);

export default reducer;
