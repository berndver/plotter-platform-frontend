import { FunctionComponent } from "react";
import { Paper, Stack, styled, TextField } from "@mui/material";

const SearchFieldWrapper = styled(Paper)`
  flex: 1;
`;

const SearchField = styled(TextField)`
  width: 100%;
`;

const RessourceSearch: FunctionComponent = () => {
  return (
    <Stack direction="row">
      <SearchFieldWrapper>
        <SearchField
          variant="outlined"
          placeholder="Suche nach Schriften, Illustrationen und Designs"
          color="primary"
        />
      </SearchFieldWrapper>
    </Stack>
  );
};

export default RessourceSearch;
