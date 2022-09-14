import React from 'react';
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
