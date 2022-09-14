import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthenticationSliceState, User } from "../../types/authentication";
import AuthenticationStatus from "../../constants/authenticationStatus";
import { checkLogin, logout } from "./actions";
import authenticationStatus from "../../constants/authenticationStatus";

const initialState: AuthenticationSliceState = {
  status: AuthenticationStatus.Initial,
};

const slice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateEntity: (state, action: PayloadAction<User | undefined>) => {
      state.entity = action.payload;
    },
    updateStatus: (state, action: PayloadAction<AuthenticationStatus>) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
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

export const { updateStatus, updateEntity } = slice.actions;
export const { reducer } = slice;
