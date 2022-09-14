import { AppState } from "../../types/store/appState";

export const selectStatus = (state: AppState) => state.authentication.status;
export const selectCurrentUser = (state: AppState) =>
  state.authentication.entity;
