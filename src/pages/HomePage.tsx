import { FunctionComponent } from "react";
import useCurrentUser from "../hooks/authentication/useCurrentUser";
import { Container, Stack, styled, Typography } from "@mui/material";
import RessourceSearch from "../components/common/RessourceSearch";

const BackgroundImageContainer = styled("div")`
  position: absolute;
  z-index: -1;
`;

const HomePage: FunctionComponent = () => {
  const [currentUser] = useCurrentUser();

  return (
    <Stack>
      {/*<BackgroundImageContainer>*/}
      {/*  <img*/}
      {/*    src={`${process.env.PUBLIC_URL}/star_background.jpg`}*/}
      {/*    alt="background"*/}
      {/*  />*/}
      {/*</BackgroundImageContainer>*/}
      <RessourceSearch />
    </Stack>
  );
};

export default HomePage;
