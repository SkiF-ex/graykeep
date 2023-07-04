import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { AbilityCard } from './AbilityCard';
import { IState } from 'types/state';
import { fetchData } from '../../redux/features/slice';

import styles from './Abilities.module.scss';

export const Abilities = () => {
	const dispatch = useDispatch();
	const searchParams = useSearchParams();
	
	const data = useSelector((state: IState) => state.redux.data);
	const loader = useSelector((state: IState) => state.redux.loader);

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
