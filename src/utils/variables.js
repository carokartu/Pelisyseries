export const URL_BASE = 'https://api.themoviedb.org/3/movie/';
export const API_KEY = 'api_key=60f4e8225b109e5131a88c96f3fecfc0';
export const QUERY_PARAMS = '&language=es-ES&page=1';

export const POPULARMOVIES_URL = `${URL_BASE + 'popular?' + API_KEY + QUERY_PARAMS}`;
export const BEST_RATEDMOVIES_URL = `${URL_BASE + 'top_rated?' + API_KEY + QUERY_PARAMS}`;
export const UPCOMING_MOVIES_URL = `${URL_BASE + 'upcoming?' + API_KEY + QUERY_PARAMS}`;
export const TRENDYMOVIES_URL = `https://api.themoviedb.org/3/trending/movie/week?${API_KEY}`;
export const TRENDYSERIES_URL = `https://api.themoviedb.org/3/trending/tv/week?${API_KEY}`;

export const findURLvariable = (pathName) => {
	if (pathName === '/peliculas-populares') {
		return 'popular?';
	} else if (pathName === '/mejor-calificadas') {
		return 'top_rated?';
	} else if (pathName === '/proximos-estrenos') {
		return 'upcoming?';
	}
};

export const findURL = (pathName) => {
	const variable = findURLvariable(pathName);
	return URL_BASE + variable + API_KEY + QUERY_PARAMS;
};

export const stringToUpperCase = (str) => {
	return str.toUpperCase();
};
