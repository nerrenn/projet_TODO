/**
 * Composant principale de l'application
 */

import { StrictMode } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AppGlobalStyle } from "../style/App.style";
import Subscription from "./Subscription";

export default function App() {
    return(
        <StrictMode>
            <AppGlobalStyle/>
            <BrowserRouter>
            <Routes>
                <Route path="/inscription" element={<Subscription/>}/>
            </Routes>
            </BrowserRouter>
        </StrictMode>
    )
}