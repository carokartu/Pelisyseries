// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useFetch from '../utils/hooks/useFetch';
import { TRENDYMOVIES_URL, TRENDYSERIES_URL } from '../utils/variables';
import CardSection from '../components/CardSection';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const Home = () => {
	const location = useLocation();
	const trendyMovies = useFetch(TRENDYMOVIES_URL);
	const trendySeries = useFetch(TRENDYSERIES_URL);

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
