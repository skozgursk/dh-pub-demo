import { Link } from "react-router-dom"
import styles from "./errorPage.module.scss"
import { Typography } from "../../components"


export const ErrorPage = () => {
    return <div className={styles.__}>
        <Typography red xxl semibold>
            <h1>
                Error
            </h1>
        </Typography>
        <Typography green lg regular>
            <Link to={'/'}>Ana Sayfaya Dön</Link>
        </Typography>
    </div>
}