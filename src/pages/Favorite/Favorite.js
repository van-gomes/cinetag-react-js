import Banner from "components/Banner/Banner";
import Title from "components/Title/Title";
import Card from "components/Card/Card";
import styles from "./Favorite.module.css";

function Favoritos() {
    <>
            <Banner imagem='favoritos' />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <section className={styles.container}>
                <Card id='1' titulo='Gato bonifácio' capa='https://thecatapi.com/api/images/get?format=src&type=png' />
            </section>
        </>
}

export default Favoritos;