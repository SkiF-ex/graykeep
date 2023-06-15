import React from 'react';
import { Grid } from '@mui/material';
import cn from 'classnames';

import { AbilityCard } from './AbilityCard';
import { ITechTree } from 'types/skills';

import styles from './Abilities.module.scss';

export const Abilities = ({ status, abilities }: { status: boolean, abilities: ITechTree }) => {
	const getAllTrees = (object: any) => {
		const treeElements = [];
		for (const tree in object) {
			for (const perk in object[tree]) {
				treeElements.push(<AbilityCard key={perk} status={status} card={object[tree][perk]} />);
			}
		}
		return treeElements;
	};


	return (
		<section className={status ? styles.root : cn(styles.root, styles.unlearned)}>
			<h2 className={styles.head}>{status ? 'Learned abilities' : 'Unlearned abilities'}</h2>
			<Grid wrap='wrap' container spacing={2}>
				{getAllTrees(abilities)}
			</Grid>
		</section>
	)
}