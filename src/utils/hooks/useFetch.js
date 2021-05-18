import { useState, useEffect } from 'react';
// import { findURL } from '../variables';

const useFetch = (url) => {
	const [ content, setContent ] = useState([]);

	useEffect(() => {
		// fetch(findURL(url)).then((res) => res.json()).then((data) => setContent(data.results));
		fetch(url).then((res) => res.json()).then((data) => setContent(data.results));
	}, []);

	return content;
};

export default useFetch;
