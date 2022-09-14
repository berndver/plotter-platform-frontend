import AuthenticationStatus from "../../constants/authenticationStatus";
import { AccountInfo } from "@azure/msal-browser";

export type User = AccountInfo;

export type AuthenticationSliceState = {
  status: AuthenticationStatus;
  entity?: User;
};
