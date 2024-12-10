import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import FavoritosProvider from "context/FavoritosContext";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Footer />
        </main>
    )
}

export default PaginaBase;