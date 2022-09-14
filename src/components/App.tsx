import React, { useEffect, useRef } from "react";
import HomePage from "../pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NavigationBar from "./common/NavigationBar";
import { Container, styled, useTheme } from "@mui/material";
import useCheckLoginHandler from "../hooks/authentication/useCheckLoginHandler";

const ContentContainer = styled(Container)`
  margin-top: 15px;
`;

const App = () => {
  const theme = useTheme();

  const initialized = useRef(false);
  const [handleCheckLogin] = useCheckLoginHandler();

  useEffect(() => {
    if (initialized.current) return;
    void handleCheckLogin();
  }, [handleCheckLogin]);

  return (
    <BrowserRouter>
      <NavigationBar />
      <ContentContainer>
        <div style={theme.mixins.toolbar}></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  );
};

export default App;
