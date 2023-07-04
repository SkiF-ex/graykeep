import { Grid } from '@mui/material';
import { useAppDispatch, useAppSelector  } from '../../redux/hooks';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { AbilityCard } from './AbilityCard';
import { IState } from 'types/state';
import { fetchData } from '../../redux/features/slice';

import styles from './Abilities.module.scss';

export const Abilities = () => {
	const dispatch = useAppDispatch();
	const searchParams = useSearchParams();
	
	const data = useAppSelector((state: IState) => state.slice.data);
	const loader = useAppSelector((state: IState) => state.slice.loader);

	useEffect(() => {
		dispatch(fetchData(searchParams.toString()) as any);
	}, [dispatch])

	const getAllCards = () => {
		return data.length > 0 && data.map((item) => {
			return <AbilityCard key={item.name} status={item.status} card={item} />
		})
	}

	const abils = () => {
		return (
			<section className={styles.root}>
			<h2 className={styles.head}>Abilities</h2>
			<Grid wrap='wrap' container spacing={2}>
				<CircularProgress sx={loader ? {display: 'block', margin: '20px auto'} : {display: 'none'}}/>
				{!loader && getAllCards()}
			</Grid>
		</section>
		)
	}

	return (data.length && !loader) && abils();
};
