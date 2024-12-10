import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import styles from "./Home.module.css";
import videos from "json/db.json";

function Home() {
  // const [videos, setVideos] = useState([]);

  //   useEffect(() => {
  //       fetch('https://my-json-server.typicode.com/monicahillman/cinetag-api/videos')
  //           .then(resposta => resposta.json())
  //           .then(dados => {
  //               setVideos(dados)
  //           })
  //   }, []);

  return (
    <div>
      <>
        <Banner imagem="home" />
        <Title>
          <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Title>
        <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
        </section>
      </>
    </div>
  );
}

export default Home;