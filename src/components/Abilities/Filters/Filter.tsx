import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, FormGroup, Checkbox, FormControlLabel, Avatar } from '@mui/material';

import blue from 'assets/technology/Blue_Tech_Symbol.png'
import red from 'assets/technology/Red_Tech_Symbol.png'
import green from 'assets/technology/Green_Tech_Symbol.png'

import styles from './Filters.module.scss';

const points = [{ name: 'Red', img: red }, { name: 'Blue', img: blue }, { name: 'Green', img: green }]

export const Filters = () => {
    const [filterTree, setFilterTree] = useState<string>('');

    const pointsFilter = () => {
        return (
            <FormGroup row sx={{ userSelect: "none", color: "text.primary" }}>
                {points.map((item) => {
                    return (
                        <FormControlLabel
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

    return (
        <section className={styles.root}>
            <div>
                <label className={styles.label}>Required:</label>
                {pointsFilter()}
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
                    <MenuItem value="Anatomy and Alchemy">Anatomy and Alchemy</MenuItem>
                    <MenuItem value="Theology">Theology</MenuItem>
                    <MenuItem value="Book Writing">Book Writing</MenuItem>
                </Select>
            </FormControl>
        </section>
    );
};