import Footer from "components/Footer/Footer";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Banner from "components/Banner/Banner";
import Title from "components/Title/Title";

function Home() {
  return (
    <div>
      <>
        <Banner imagem="home" />
        <Cabecalho />
        <Title>
          <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Title>
        <Footer />
      </>
    </div>
  );
}

export default Home;