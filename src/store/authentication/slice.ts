import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationSliceState } from "../../types/authentication";
import AuthenticationStatus from "../../constants/authenticationStatus";
import { checkLogin, logout, microsoftLogin } from "./actions";
import authenticationStatus from "../../constants/authenticationStatus";

const initialState: AuthenticationSliceState = {
  status: AuthenticationStatus.Initial,
};

const slice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(microsoftLogin.pending, (state) => {
        state.status = AuthenticationStatus.Loading;
      })
      .addCase(microsoftLogin.fulfilled, (state, action) => {
        if (action.payload) {
          state.entity = action.payload;
          state.status = authenticationStatus.Authenticated;
        } else {
          state.entity = undefined;
          state.status = authenticationStatus.Unauthenticated;
        }
      })
      .addCase(microsoftLogin.rejected, (state, action) => {
        state.entity = undefined;
        state.status = AuthenticationStatus.Error;
      })
      .addCase(checkLogin.pending, (state) => {
        state.status = AuthenticationStatus.Loading;
      })
      .addCase(checkLogin.fulfilled, (state, action) => {
        if (!!action.payload) {
          state.entity = action.payload;
          state.status = authenticationStatus.Authenticated;
        } else {
          state.entity = undefined;
          state.status = authenticationStatus.Unauthenticated;
        }
      })
      .addCase(checkLogin.rejected, (state) => {
        state.entity = undefined;
        state.status = AuthenticationStatus.Error;
      })
      .addCase(logout.fulfilled, (state) => {
        state.entity = undefined;
        state.status = AuthenticationStatus.Unauthenticated;
      }),
});

export default slice.reducer;
