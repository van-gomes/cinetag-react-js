import { useFavoritoContext } from "context/FavoritosContext";
import Banner from "components/Banner/Banner";
import Title from "components/Title/Title";
import Card from "components/Card/Card";
import styles from "./Favorite.module.css";

function Favoritos() {
    const { favorito } = useFavoritoContext();

    <>
     <Banner imagem='favoritos' />
     <Title>
        <h1>Meus Favoritos</h1>
    </Title>
    <section className={styles.container}>
        {favorito.map((fav) => {
            return <Card {...fav} key={fav.id} />
        })}
    </section> 
    </>
}

export default Favoritos;