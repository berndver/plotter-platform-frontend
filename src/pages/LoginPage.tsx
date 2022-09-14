import {FunctionComponent, useCallback} from "react";
import NavigationBar from "../components/navigation-bar/NavigationBar";
import {Button, Container, Typography} from "@mui/material";
import microsoftAuthProvider from "../authentication/microsoftAuthProvider";

const LoginPage: FunctionComponent = () => {
    const handleMicrosoftLogin = useCallback(async () => {
        const auth = await microsoftAuthProvider.loginPopup({
            scopes: [],
            redirectUri: "http://localhost:3000/blank.html",
            authority: 'https://login.microsoftonline.com/3d115e87-de25-47ee-ba96-9408b3b2ea9d'
        });
    }, [])

    return <div>
        <NavigationBar/>
        <Container>
           <Button onClick={handleMicrosoftLogin}>
               Login with Microsoft
           </Button>
        </Container>
    </div>
}

export default LoginPage;
