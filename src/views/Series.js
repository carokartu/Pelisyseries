import useFetch from '../utils/hooks/useFetch';
import { POPULAR_TVSERIES, BESTRATED_TVSERIES, ONTHEAIR_TVSERIES } from '../utils/variables';
import CardSection from '../components/CardSection';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const Series = () => {
	const popular = useFetch(POPULAR_TVSERIES, true);
	const bestRated = useFetch(BESTRATED_TVSERIES, true);
	const onTheAir = useFetch(ONTHEAIR_TVSERIES, true);

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CardSection content={popular} sectionTitle="Series populares" isPreview={true} />
				<CardSection content={bestRated} sectionTitle="Series con mejores críticas" isPreview={true} />
				<CardSection content={onTheAir} sectionTitle="Series al aire" isPreview={true} />
			</ThemeProvider>
		</div>
	);
};

export default Series;
