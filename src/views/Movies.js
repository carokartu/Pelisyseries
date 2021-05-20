// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useFetch from '../utils/hooks/useFetch';
import { POPULAR_MOVIES, BESTRATED_MOVIES, UPCOMING_MOVIES } from '../utils/variables';
import CardSection from '../components/CardSection';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const Movies = () => {
	const popular = useFetch(POPULAR_MOVIES);
	const bestRated = useFetch(BESTRATED_MOVIES);
	const upComing = useFetch(UPCOMING_MOVIES);

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CardSection content={popular} sectionTitle="Películas populares" />
				<CardSection content={bestRated} sectionTitle="Películas con mejores críticas" />
				<CardSection content={upComing} sectionTitle="Películas a estrenarse" />
			</ThemeProvider>
		</div>
	);
};

export default Movies;
