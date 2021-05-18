// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useFetch from '../utils/hooks/useFetch';
import { TRENDY_MOVIES, TRENDY_TVSERIES } from '../utils/variables';
import CardSection from '../components/CardSection';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const Home = () => {
	const trendyMovies = useFetch(TRENDY_MOVIES);
	const trendySeries = useFetch(TRENDY_TVSERIES);

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CardSection content={trendyMovies} sectionTitle="Películas que son tendencia" />
				<CardSection content={trendySeries} sectionTitle="Series que son tendencia" />
			</ThemeProvider>
		</div>
	);
};

export default Home;
