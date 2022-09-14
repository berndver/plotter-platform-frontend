import {FunctionComponent} from "react";
import {Stack, TextField} from "@mui/material";

const RessourceSearch: FunctionComponent = () => {
    return <Stack direction="row">
        <TextField sx={{flex: 1}} variant="outlined" placeholder="e.g. holdiay"/>
    </Stack>
}

export default RessourceSearch;
