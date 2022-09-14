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

export const microsoftLogin = createAsyncThunk<User | null>(
  "authentication/microsoftLogin",
  async () => {
    try {
      const ssoAuth = await microsoftAuthProvider.ssoSilent({
        scopes: [],
        redirectUri: "http://localhost:3000/",
        authority:
          "https://login.microsoftonline.com/819d0330-fb4c-48d9-996e-29be018ee9b5",
      });
      microsoftAuthProvider.setActiveAccount(ssoAuth.account);

      return ssoAuth.account;
    } catch (e) {
      const auth = await microsoftAuthProvider.loginPopup({
        scopes: [],
        redirectUri: "http://localhost:3000/",
        authority:
          "https://login.microsoftonline.com/819d0330-fb4c-48d9-996e-29be018ee9b5",
      });

      microsoftAuthProvider.setActiveAccount(auth.account);

      return auth.account;
    }
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
