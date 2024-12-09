import Footer from "components/Footer/Footer";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Banner from "components/Banner/Banner";
import Title from "components/Title/Title";
import Card from "components/Card/Card";
import styles from "./Home.module.css";
import videos from "./db.json";

function Home() {
  return (
    <div>
      <>
        <Banner imagem="home" />
        <Cabecalho />
        <Title>
          <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Title>
        <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
        </section>
        <Footer />
      </>
    </div>
  );
}

export default Home;