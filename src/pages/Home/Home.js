import Footer from "components/Footer/Footer";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Banner from "components/Banner/Banner";

function Home() {
  return (
    <div>
      <>
        <Banner imagem="home" />
        <Cabecalho />
        <Footer />
      </>
    </div>
  );
}

export default Home;