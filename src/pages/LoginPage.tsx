import { FunctionComponent, useEffect } from "react";
import { Button } from "@mui/material";
import useMicrosoftLoginHandler from "../hooks/authentication/useMicrosoftLoginHandler";
import useAuthentication from "../hooks/authentication/useAuthentication";
import { useNavigate } from "react-router-dom";
import AuthenticationStatus from "../constants/authenticationStatus";

const LoginPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const [authStatus] = useAuthentication();
  const [handleMicrosoftLogin] = useMicrosoftLoginHandler({
    redirectPath: "/",
  });

  useEffect(() => {
    if (authStatus !== AuthenticationStatus.Authenticated) return;
    navigate({ pathname: "/" });
  }, []);

  return (
    <div>
      <Button onClick={handleMicrosoftLogin}>Login with Microsoft</Button>
    </div>
  );
};

export default LoginPage;
