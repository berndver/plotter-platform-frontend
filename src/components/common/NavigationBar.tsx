import { FunctionComponent, useCallback } from "react";
import {
  AppBar,
  Button,
  Container,
  Icon,
  IconButton,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuthentication from "../../hooks/authentication/useAuthentication";
import AuthenticationStatus from "../../constants/authenticationStatus";
import useLogoutHandler from "../../hooks/authentication/useLogoutHandler";
import pages from "../../constants/pages";
import useIsWideWidth from "../../hooks/media-queries/useIsWideWidth";

const NavigationBar: FunctionComponent = () => {
  const navigate = useNavigate();

  const { status } = useAuthentication();
  const [handleLogout] = useLogoutHandler({});
  const [hideMenu] = useIsWideWidth();

  const handleRouteClick = useCallback(
    (route: string) => {
      navigate({ pathname: route });
    },
    [navigate]
  );

  const handleLogoutClick = useCallback(async () => {
    await handleLogout();
    navigate({ pathname: "/" });
  }, [handleLogout, navigate]);

  return (
    <AppBar position="fixed">
      <Toolbar>
        {!hideMenu && (
          <IconButton color="inherit">
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Button
          color="inherit"
          onClick={() => handleRouteClick(pages.home.route)}
        >
          Plotter Platform
        </Button>
        <Container sx={{ flex: 1 }} />
        {status !== AuthenticationStatus.Authenticated && (
          <Button
            color="inherit"
            onClick={() => handleRouteClick(pages.login.route)}
          >
            Login
          </Button>
        )}
        {status === AuthenticationStatus.Authenticated && (
          <Button color="inherit" onClick={handleLogoutClick}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
