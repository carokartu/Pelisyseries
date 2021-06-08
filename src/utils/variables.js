export const URL_BASE = 'https://api.themoviedb.org/3/';
export const API_KEY = 'api_key=60f4e8225b109e5131a88c96f3fecfc0';

export const retrieveInfo = (endpoint, language, page) =>
	`${URL_BASE}${endpoint}?${API_KEY}&language=${language}&page=${page}`;

export const stringToUpperCase = (str) => str.toUpperCase();

export const imageSize = (size) => `https://image.tmdb.org/t/p/${size}`;

export const BACKDROPIMAGE = imageSize('w1280');
export const POSTERIMAGE = imageSize('original');

export const POPULAR_MOVIES = retrieveInfo('movie/popular', 'en-EN', '1');
export const BESTRATED_MOVIES = retrieveInfo('movie/top_rated', 'en-EN', '1');
export const UPCOMING_MOVIES = retrieveInfo('movie/upcoming', 'en-EN', '1');

export const TRENDY_MOVIES = retrieveInfo('trending/movie/week', 'en-EN', '1');
export const TRENDY_TVSERIES = retrieveInfo('trending/tv/week', 'en-EN', '1');

export const POPULAR_TVSERIES = retrieveInfo('tv/popular', 'en-EN', '1');
export const BESTRATED_TVSERIES = retrieveInfo('tv/top_rated', 'en-EN', '1');
export const ONTHEAIR_TVSERIES = retrieveInfo('tv/on_the_air', 'en-EN', '1');

export const noAmountFound = (amount) =>
	amount === 0 ? 'No se encontró este valor' : `$${Number(amount).toLocaleString()}`;
