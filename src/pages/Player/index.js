import Banner from '../../components/Banner';
import Title from '../../components/Title';
import { useParams } from 'react-router-dom';
import videos from 'json/db.json';
import styles from './Player.module.css';
import NaoEncontrada from 'pages/NaoEncontrada';

function Player() {
    // const [video, setVideo] = useState();
    // const parametros = useParams();

    // useEffect(() => {
    //     fetch(`https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${parametros.id}`)
    //         .then(resposta => resposta.json())
    //         .then(dados => {
    //             setVideo(...dados)
    //         })
    // }, []);

    const parametros = useParams();
    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })

    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </>
    );
}

export default Player;