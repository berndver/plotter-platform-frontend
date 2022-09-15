import React, { useEffect } from "react";
import HomePage from "../pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NavigationBar from "./common/NavigationBar";
import { useTheme } from "@mui/material";
import { useMsal } from "@azure/msal-react";
import useAuthentication from "../hooks/authentication/useAuthentication";
import AuthenticationStatus from "../constants/authenticationStatus";
import { updateEntity, updateStatus } from "../store/authentication/actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { accounts } = useMsal();
  const { status } = useAuthentication();

  useEffect(() => {
    if (status !== AuthenticationStatus.Initial || accounts.length === 0)
      return;
    dispatch(updateEntity(accounts[0]));
    dispatch(updateStatus(AuthenticationStatus.Authenticated));
  }, [accounts, dispatch, status]);

  return (
    <BrowserRouter>
      <NavigationBar />
      <div style={theme.mixins.toolbar}></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
