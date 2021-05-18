// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useFetch from '../utils/hooks/useFetch';
import { POPULAR_TVSERIES, BESTRATED_TVSERIES, ONTHEAIR_TVSERIES } from '../utils/variables';
import CardSection from '../components/CardSection';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const Series = () => {
	const popular = useFetch(POPULAR_TVSERIES);
	const bestRated = useFetch(BESTRATED_TVSERIES);
	const onTheAir = useFetch(ONTHEAIR_TVSERIES);

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CardSection content={popular} sectionTitle="Series populares" />
				<CardSection content={bestRated} sectionTitle="Series con mejores críticas" />
				<CardSection content={onTheAir} sectionTitle="Series al aire" />
			</ThemeProvider>
		</div>
	);
};

export default Series;
