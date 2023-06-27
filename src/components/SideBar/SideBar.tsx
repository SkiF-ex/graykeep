import { useState } from 'react';
import cn from 'classnames';

import styles from './SideBar.module.scss';
import { Navigation } from './Navigation';

export const SideBar = () => {
    const [status, setStatus] = useState(false);

    return (
        <>
            <div className={status ? cn(styles.burger, styles.active) : styles.burger} onClick={() => setStatus(!status)}>
                <div/>
            </div>
            <Navigation status={status} />
        </>

    )
}