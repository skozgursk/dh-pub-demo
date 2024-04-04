import { Link } from "react-router-dom"
import styles from "./home.module.scss"


export const Home = () => {

    return <div className={styles.__}>
        <h1>
            Hoşgeldiniz
        </h1>
        <Link to={'question/1'}>Teste başlamak için tıklayın</Link>
    </div>
}