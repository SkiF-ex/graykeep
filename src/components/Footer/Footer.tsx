import React from 'react';
import { Grid } from '@mui/material';

import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.root}>
            <h3 className={styles.title}>Graveyard Keeper Storybook © 2023</h3>
        </footer>
    )
}