import { FunctionComponent } from "react";
import { Stack, styled } from "@mui/material";
import RessourceSearch from "../components/common/RessourceSearch";

const BackgroundImage = styled("img")`
  width: 100%;
  z-index: -1;
`;

const RessourceSearchContainer = styled("div")`
  position: absolute;
  top: 50%;
  width: 60%;
  margin: 0 20%;
`;

const ImageSearchContainer = styled("div")`
  position: relative;
`;

const HomePage: FunctionComponent = () => {
  return (
    <Stack>
      <ImageSearchContainer>
        <BackgroundImage
          src={`${process.env.PUBLIC_URL}/star_background.jpg`}
        ></BackgroundImage>

        <RessourceSearchContainer>
          <RessourceSearch />
        </RessourceSearchContainer>
      </ImageSearchContainer>
    </Stack>
  );
};

export default HomePage;
