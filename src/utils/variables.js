export const URL_BASE = 'https://api.themoviedb.org/3/';
export const API_KEY = 'api_key=60f4e8225b109e5131a88c96f3fecfc0';
export const QUERY_PARAMS = '&language=en-ES&page=1';

export const pickLanguage = (language) => {
	return `&language=${language}-ES&page=1`;
};

export const retrieveInfo = (endpoint, language) => {
	return `${URL_BASE}${endpoint}?${API_KEY}${pickLanguage(language)}`;
};

export const defineContent = (content) => {
	if (content.toString().includes('movie')) {
		console.log(content);
		return 'movie';
	} else {
		console.log(content);
		return 'tv';
	}
};

export const stringToUpperCase = (str) => {
	return str.toUpperCase();
};

export const imageSize = (size) => {
	return `https://image.tmdb.org/t/p/${size}`;
};

export const BACKDROPIMAGE = imageSize('w1280');
export const POSTERIMAGE = imageSize('original');

export const POPULAR_MOVIES = retrieveInfo('movie/popular', 'en');
export const BESTRATED_MOVIES = retrieveInfo('movie/top_rated', 'en');
export const UPCOMING_MOVIES = retrieveInfo('movie/upcoming', 'en');

export const TRENDY_MOVIES = retrieveInfo('trending/movie/week', 'en');
export const TRENDY_TVSERIES = retrieveInfo('trending/tv/week', 'en');

export const POPULAR_TVSERIES = retrieveInfo('tv/popular', 'en');
export const BESTRATED_TVSERIES = retrieveInfo('tv/top_rated', 'en');
export const ONTHEAIR_TVSERIES = retrieveInfo('tv/on_the_air', 'en');

export const noAmountFound = (amount) => {
	return amount === 0 ? 'No se encontró este valor' : `$${Number(amount).toLocaleString()}`;
};
