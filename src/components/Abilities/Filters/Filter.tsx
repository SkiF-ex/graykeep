import { useEffect, useState } from 'react';
import { ToggleButtonGroup, ToggleButton, Skeleton } from '@mui/material';
import { useAppDispatch, useAppSelector  } from '../../../redux/hooks';
import { useSearchParams, useRouter } from 'next/navigation';

import { IState } from 'types/state';
import { fetchData, fetchTrees } from '../../../redux/features/slice';
import { SelectComponent } from './components/SelectComponent';
import { PointsFilter } from './components/PointsFilter';

import styles from './Filters.module.scss';

export const Filters = () => {
    const dispatch = useAppDispatch();
    const searchParams = useSearchParams();
    const router = useRouter();

    const trees = useAppSelector((state: IState) => state.slice.trees);
    const [filterTree, setFilterTree] = useState<string>(searchParams.get('tree') || 'All');
    const [pool, setPool] = useState<string>(searchParams.get('pool') || 'All');

    useEffect(() => {
        const params = new URLSearchParams(searchParams);

        params.set('tree', filterTree);
        params.set('pool', pool);

        router.push(`perks?${params.toString()}`);
        dispatch(fetchData(params.toString()) as any);
    }, [pool, filterTree]);

    useEffect(() => {
        dispatch(fetchTrees() as any);
    }, []);

    return (
        <section className={styles.root}>
            <div>
                <label className={styles.label}>Required:</label>
                {<PointsFilter />}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label className={styles.label}>Group:</label>
                <ToggleButtonGroup
                    sx={{ height: '30px', padding: '7px 0' }}
                    color="secondary"
                    value={pool}
                    exclusive
                    onChange={(event, pool: string) => { if (pool !== null) { setPool(pool) } }}
                    aria-label="Platform"
                >
                    <ToggleButton value="All">All</ToggleButton>
                    <ToggleButton value="Ulearned">Ulearned</ToggleButton>
                    <ToggleButton value="Learned">Learned</ToggleButton>
                </ToggleButtonGroup>
            </div>
            {trees.length ? <SelectComponent filter={filterTree} trees={trees} setter={setFilterTree} /> : <Skeleton variant='rounded' height={56} width={300} />}
        </section>
    );
};