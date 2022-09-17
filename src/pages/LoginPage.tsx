import { FunctionComponent, useEffect } from "react";
import { Button, Stack, Typography } from "@mui/material";
import useMicrosoftLoginHandler from "../hooks/authentication/useMicrosoftLoginHandler";
import useAuthentication from "../hooks/authentication/useAuthentication";
import { useNavigate } from "react-router-dom";
import AuthenticationStatus from "../constants/authenticationStatus";
import PageContainer from "../components/common/PageContainer";

const LoginPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const { status } = useAuthentication();
  const { handleMicrosoftLogin } = useMicrosoftLoginHandler({
    redirectPath: "/",
  });

  useEffect(() => {
    if (status !== AuthenticationStatus.Authenticated) return;
    navigate({ pathname: "/" });
  }, [status, navigate]);

  return (
    <PageContainer>
      <Stack flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant="h6">Weiter Mit</Typography>
        <Button
          onClick={handleMicrosoftLogin}
          variant="contained"
          color="primary"
        >
          Login with Microsoft
        </Button>
      </Stack>
    </PageContainer>
  );
};

export default LoginPage;
