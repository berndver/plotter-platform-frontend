import { createAsyncThunk } from "@reduxjs/toolkit";
import microsoftAuthProvider from "../../utils/authentication/microsoftAuthProvider";
import { User } from "../../types/authentication";
import type { AppState } from "../../types/store/appState";
import AuthenticationStatus from "../../constants/authenticationStatus";
import { selectCurrentUser } from "./selectors";

export const checkLogin = createAsyncThunk<
  User | null,
  void,
  { state: AppState }
>(
  "authentication/checkLogin",
  async () => {
    return microsoftAuthProvider.getActiveAccount();
  },
  {
    condition: (arg, api) =>
      api.getState().authentication.status === AuthenticationStatus.Initial,
  }
);

export const logout = createAsyncThunk<void, void, { state: AppState }>(
  "authentication/logout",
  async (_, api) => {
    const currentUser = selectCurrentUser(api.getState());
    if (!currentUser) return;

    await microsoftAuthProvider.setActiveAccount(null);
  }
);
