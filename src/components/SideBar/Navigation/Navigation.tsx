import cn from 'classnames';
import { Button } from '@mui/material';

import wiki from 'assets/wiki.png';

import styles from './Navigation.module.scss';

export const Navigation = ({status} : {status: boolean}) => {

    const NavButton = (text: string, key: string) => 
        <Button 
            key={key} 
            sx={{marginBottom: '10px', textTransform: 'none', borderColor: '#4a4d55'}} 
            size='large' 
            variant='outlined' 
            color='secondary'
            >
                {text}
            </Button>;
    const buttons = [{text: 'Main', link: '#'}, {text: 'Abilities', link: '#'}, {text: 'NPC\'s', link: '#'}];

    return (
        <div className={status ? cn(styles.root, styles.active) : styles.root}>
            <img className={styles.wiki} src={wiki} />
            <nav className={styles.nav}>
                {buttons.map((item) => NavButton(item.text, item.text))}
            </nav>
        </div>
    )
}