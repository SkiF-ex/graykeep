import { Grid } from '@mui/material';

import { SideBar } from 'components/SideBar';
import { Main } from 'components/Main';
import { Header } from 'components/Header';
import { Abilities } from 'components/Abilities';
import { Footer } from 'components/Footer';
import { Filters } from 'components/Abilities/Filters';

import styles from './Root.module.scss';

export const Root = () => {
    return (
        <main className={styles.root}>
            <SideBar />
            <Grid container >
                <Grid item xs={11} md={10} lg={8} xl={8} sx={{ mx: 'auto' }}>
                    <Header />
                    {/* <Main /> */}
                    <Filters />
                    <Abilities />
                    <Footer />
                </Grid>
            </Grid>
        </main>
    )
}