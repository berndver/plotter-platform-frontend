import { createAction } from "@reduxjs/toolkit";
import AuthenticationStatus from "../../constants/authenticationStatus";
import type { User } from "../../types/authentication";

export const updateStatus = createAction<AuthenticationStatus>(
  "authentication/updateStatus"
);
export const updateEntity = createAction<User | undefined>(
  "authentication/updateEntity"
);
