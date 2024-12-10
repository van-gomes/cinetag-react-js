import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Footer from "components/Footer";
import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import FavoritosProvider from "context/FavoritosContext";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<Home />}></Route>
                    <Route path="favoritos" element={<Favorite />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;