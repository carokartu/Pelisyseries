// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useFetch from '../utils/hooks/useFetch';
import { POPULAR_MOVIES, BESTRATED_MOVIES, UPCOMING_MOVIES } from '../utils/variables';
import CardSection from '../components/CardSection';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const Movies = () => {
	const popular = useFetch(POPULAR_MOVIES, true);
	const bestRated = useFetch(BESTRATED_MOVIES, true);
	const upComing = useFetch(UPCOMING_MOVIES, true);

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CardSection content={popular} sectionTitle="Películas populares" isPreview={true} />
				<CardSection content={bestRated} sectionTitle="Películas con mejores críticas" isPreview={true} />
				<CardSection content={upComing} sectionTitle="Películas a estrenarse" isPreview={true} />
			</ThemeProvider>
		</div>
	);
};

export default Movies;
