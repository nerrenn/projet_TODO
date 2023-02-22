/**
 * Composant principale de l'application
 */

import { StrictMode } from "react";
import { Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AppGlobalStyle } from "../style/App.style";
import Subscription from "./Subscription";

export default function App() {
    return(
        <StrictMode>
            <AppGlobalStyle/>
            <Subscription/>
            <BrowserRouter>
            <Routes>

            </Routes>
            </BrowserRouter>
        </StrictMode>
    )
}