import React from 'react';
import { Grid } from '@mui/material';

import { SideBar } from 'components/SideBar';
import { Main } from 'components/Main';
import { Header } from 'components/Header';
import { Abilities } from 'components/Abilities';
import { Footer } from 'components/Footer';
import { Filters } from 'components/Abilities/Filters';
import { mockAbi } from '../../MOCK';
import { ITechTree } from 'types/skills';

import styles from './Root.module.scss';

export const Root = () => {
    return (
        <main className={styles.root}>
            <SideBar />
            <Grid container >
                <Grid item sx={{mx: 'auto'}}>
                    <Header />
                    {/* <Main /> */}
                    <Filters />
                    <div className={styles.boards}>
                        <Abilities status={true} abilities={mockAbi} />
                        <Abilities status={false} abilities={mockAbi}/>
                    </div>
                    <Footer />
                </Grid>
            </Grid>
        </main>
    )
}