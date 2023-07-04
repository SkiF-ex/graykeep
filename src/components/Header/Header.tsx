'use client'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.root}>
            <div className={styles.left}>
                <div className={styles.imageBox}>
                    <Image alt='wiki' height='100' width='89' className={styles.wiki} src='/wiki.png' />
                </div>
                <h2 className={styles.title}>Graveyard Keeper Storybook</h2>
            </div>
            <Stack spacing={2} direction="row">
                <Button sx={{textTransform: 'none'}} color='secondary' variant='outlined'>Log In</Button>
                <Button sx={{textTransform: 'none'}} color='secondary' variant='contained'>Registration</Button>
            </Stack>
        </header>
    )
}