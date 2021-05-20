export const URL_BASE = 'https://api.themoviedb.org/3/';
export const API_KEY = 'api_key=60f4e8225b109e5131a88c96f3fecfc0';
export const QUERY_PARAMS = '&language=en-ES&page=1';

export const retrieveInfo = (endpoint) => {
	return `${URL_BASE}${endpoint}?${API_KEY}${QUERY_PARAMS}`;
};

export const stringToUpperCase = (str) => {
	return str.toUpperCase();
};

export const imageSize = (size) => {
	return `https://image.tmdb.org/t/p/${size}`;
};

export const BACKDROPIMAGE = imageSize('w500');
export const POSTERIMAGE = imageSize('w185_and_h278_bestv2');

export const POPULAR_MOVIES = retrieveInfo('movie/popular');
export const BESTRATED_MOVIES = retrieveInfo('movie/top_rated');
export const UPCOMING_MOVIES = retrieveInfo('movie/upcoming');

export const TRENDY_MOVIES = retrieveInfo('trending/movie/week');
export const TRENDY_TVSERIES = retrieveInfo('trending/tv/week');

export const POPULAR_TVSERIES = retrieveInfo('tv/popular');
export const BESTRATED_TVSERIES = retrieveInfo('tv/top_rated');
export const ONTHEAIR_TVSERIES = retrieveInfo('tv/on_the_air');
