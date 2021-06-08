import {
	TRENDY_MOVIES,
	TRENDY_TVSERIES,
	POPULAR_MOVIES,
	POPULAR_TVSERIES,
	UPCOMING_MOVIES,
	ONTHEAIR_TVSERIES,
	BESTRATED_MOVIES,
	BESTRATED_TVSERIES
} from './variables';

export const PAGE_DATA = {
	HOME: [
		{ type: TRENDY_MOVIES, title: 'Películas que son tendencia' },
		{ type: TRENDY_TVSERIES, title: 'Series que son tendencia' }
	],

	SERIES: [
		{ type: POPULAR_TVSERIES, title: 'Series populares' },
		{ type: ONTHEAIR_TVSERIES, title: 'Series al aire' },
		{ type: BESTRATED_TVSERIES, title: 'Series con mejores críticas' }
	],

	MOVIES: [
		{ type: POPULAR_MOVIES, title: 'Películas populares' },
		{ type: UPCOMING_MOVIES, title: 'Próximos estrenos' },
		{ type: BESTRATED_MOVIES, title: 'Películas con mejores críticas' }
	]
};
