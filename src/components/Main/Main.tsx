import styles from './Main.module.scss';
import { Link } from '@mui/material';

export const Main = () => {
    return (
        <section className={styles.root}>
            <h3>
                <Link color='secondary' href='localhost:3000' underline='hover'>Graveyard Keeper</Link> - самый недостоверный симулятор средневекового кладбища этого года. Строй и управляй кладбищем, пытайся сэкономить, развивай сторонний бизнес и заботься, чтобы ни один ценный ресурс не пропал без дела. Не забывай, тут игра про капитализм, где все способы получения прибыли хороши. Да, кстати, еще это - история любви.
            </h3>
        </section>
    )
}