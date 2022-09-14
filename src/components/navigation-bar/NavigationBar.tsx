import {FunctionComponent, useCallback} from "react";
import {AppBar, Box, Button, Container, Icon, IconButton, Link, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const pages = [
    {name: "Login", route: 'login'}
]

const NavigationBar: FunctionComponent = () => {
    const navigate = useNavigate()

    const handleRouteClick = useCallback((route: string) => {
        navigate({pathname: route})
    }, [])

    return <AppBar position="static">
        <Toolbar>
            <IconButton color="inherit">
                <Icon>menu</Icon>
            </IconButton>
            <Button color="inherit" onClick={() => handleRouteClick('/')}>
                Plotter Platform
            </Button>
            <Container sx={{flex: 1}}/>
            <Button color="inherit" onClick={() => handleRouteClick('/login')}>
                Login
            </Button>
        </Toolbar>
    </AppBar>
}

export default NavigationBar;
