import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorite from "./pages/Favorite/Favorite";
import Footer from "components/Footer/Footer";
import Cabecalho from "components/Cabecalho/Cabecalho";
import Container from "components/Container/Container";
import FavoritosProvider from "context/FavoritosContext";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
            <FavoritosProvider>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/favoritos" element={<Favorite />}></Route>
                </Routes>
            </FavoritosProvider>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;