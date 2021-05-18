// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useFetch from '../utils/hooks/useFetch';
import { POPULARMOVIES_URL, BEST_RATEDMOVIES_URL, UPCOMING_MOVIES_URL } from '../utils/variables';
import CardSection from '../components/CardSection';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const Movies = () => {
	const location = useLocation();

	// const trendy = useFetch(location.pathname);
	// const bestRated = useFetch(location.pathname);
	// const upComing = useFetch(location.pathname);

	const popular = useFetch(POPULARMOVIES_URL);
	const bestRated = useFetch(BEST_RATEDMOVIES_URL);
	const upComing = useFetch(UPCOMING_MOVIES_URL);

	return (
		<div>
			<ThemeProvider theme={theme}>
				{/* <BrowserRouter>
					<Switch>
						<Route path="/peliculas-populares"> */}
				<CardSection content={popular} sectionTitle="Películas populares" />
				{/* </Route>
						<Route path="/mejor-calificadas"> */}
				<CardSection content={bestRated} sectionTitle="Películas con mejores críticas" />
				{/* </Route>
						<Route path="/proximos-estrenos"> */}
				<CardSection content={upComing} sectionTitle="Películas a estrenarse" />
				{/* </Route>
					</Switch>
				</BrowserRouter> */}
			</ThemeProvider>
		</div>
	);
};

export default Movies;
