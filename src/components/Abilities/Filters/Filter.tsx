import { useEffect, useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, FormGroup, Checkbox, FormControlLabel, Avatar, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from 'types/state';
import { fetchData, fetchTrees } from '../../../slice/slice';
import blue from 'assets/technology/Blue_Tech_Symbol.png'
import red from 'assets/technology/Red_Tech_Symbol.png'
import green from 'assets/technology/Green_Tech_Symbol.png'

import styles from './Filters.module.scss';

const points = [{ name: 'Red', img: red }, { name: 'Green', img: green }, { name: 'Blue', img: blue }];

const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);

export const Filters = () => {
    const dispatch = useDispatch();
    const [filterTree, setFilterTree] = useState<string>(searchParams.get('tree') ? searchParams.get('tree') : 'All');
    const [pool, setPool] = useState<string>(searchParams.get('pool') ? searchParams.get('pool') : 'All');
    const trees = useSelector((state: IState) => state.redux.trees);

    const pointsFilter = () => {
        return (
            <FormGroup row sx={{ userSelect: "none", color: "text.primary" }}>
                {points.map((item) => {
                    return (
                        <FormControlLabel
                            key={item.name}
                            control={<Checkbox />}
                            label={
                                <div className={styles.labelContainer}>
                                    <Avatar sx={{ height: "22px", width: '18px', marginRight: '3px' }} alt={item.name} src={item.img} />
                                    {item.name}
                                </div>
                            }
                        />
                    )
                })}
            </FormGroup>
        )
    }

    useEffect(() => {
        searchParams.set('pool', pool.toLocaleLowerCase());
        filterTree.length > 0 && searchParams.set('tree', filterTree);
        url.search = searchParams.toString();
        history.pushState(null, '', url.href);
        dispatch(fetchData(url.search) as any);
    }, [pool, filterTree]);

    useEffect(() => {
        dispatch(fetchTrees() as any);
    }, [])

    return (
        <section className={styles.root}>
            <div>
                <label className={styles.label}>Required:</label>
                {pointsFilter()}
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
            <FormControl size='medium' sx={{ width: "300px" }}>
                <InputLabel color='secondary' id="demo-simple-select-label">Tree</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Tree"
                    value={filterTree}
                    color='secondary'
                    onChange={(event: SelectChangeEvent) => setFilterTree(event.target.value as string)}
                >
                    {trees.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                </Select>
            </FormControl>
        </section>
    );
};