import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorite from "./components/Favorite/Favorite";
import Footer from "components/Footer/Footer";
import Cabecalho from "components/Cabecalho/Cabecalho";
import Container from "components/Container/Container";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/favoritos" element={<Favorite />}></Route>
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;