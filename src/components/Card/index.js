import { Link } from 'react-router-dom';
import { useFavoritoContext } from 'context/FavoritosContext';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();

    const ehFavorito = favorito.some(item => item.id === id);

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>

            <img
                src={ehFavorito ? iconeFavoritar : iconeDesfavoritar}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick={() => adicionarFavorito({ id, titulo, capa })}
            />
        </div>
    );
}

export default Card;