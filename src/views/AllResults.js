// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useFetch from '../utils/hooks/useFetch';
// import { useState, useEffect } from 'react';
import CardSection from '../components/CardSection';
import {
	TRENDY_MOVIES,
	TRENDY_TVSERIES,
	POPULAR_MOVIES,
	BESTRATED_MOVIES,
	UPCOMING_MOVIES,
	POPULAR_TVSERIES,
	BESTRATED_TVSERIES,
	ONTHEAIR_TVSERIES
} from '../utils/variables';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const AllResults = () => {
	// const [ displayResults, setDisplayResults ] = useState([]);

	const popularMovies = useFetch(POPULAR_MOVIES, false);
	const bestRatedMovies = useFetch(BESTRATED_MOVIES, false);
	const upComingMovies = useFetch(UPCOMING_MOVIES, false);

	const popularTvSeries = useFetch(POPULAR_TVSERIES, false);
	const bestRatedTvSeries = useFetch(BESTRATED_TVSERIES, false);
	const onTheAirTvSeries = useFetch(ONTHEAIR_TVSERIES, false);

	const trendyMovies = useFetch(TRENDY_MOVIES, false);
	const trendySeries = useFetch(TRENDY_TVSERIES, false);
	console.log(trendySeries);

	console.log(trendyMovies);
	return (
		<div>
			<ThemeProvider theme={theme}>
				<CardSection content={trendyMovies} sectionTitle="Películas que son tendencia" isPreview={false} />
				<CardSection content={trendySeries} sectionTitle="Series que son tendencia" isPreview={false} />
				<CardSection content={popularMovies} sectionTitle="Películas populares" isPreview={false} />
				<CardSection
					content={bestRatedMovies}
					sectionTitle="Películas con mejores críticas"
					isPreview={false}
				/>
				<CardSection content={upComingMovies} sectionTitle="Películas a estrenarse" isPreview={false} />
				<CardSection content={popularTvSeries} sectionTitle="Series populares" isPreview={false} />
				<CardSection content={bestRatedTvSeries} sectionTitle="Series con mejores críticas" isPreview={false} />
				<CardSection content={onTheAirTvSeries} sectionTitle="Series al aire" isPreview={false} />
			</ThemeProvider>
		</div>
	);
};

export default AllResults;
