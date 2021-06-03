import useFetch from '../utils/hooks/useFetch';
import { TRENDY_MOVIES, TRENDY_TVSERIES } from '../utils/variables';
import CardSection from '../components/CardSection';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const Home = () => {
	const trendyMovies = useFetch(TRENDY_MOVIES, true);
	const trendySeries = useFetch(TRENDY_TVSERIES, true);

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CardSection content={trendyMovies} sectionTitle="Películas que son tendencia" isPreview={true} />
				<CardSection content={trendySeries} sectionTitle="Series que son tendencia" isPreview={true} />
			</ThemeProvider>
		</div>
	);
};

export default Home;
