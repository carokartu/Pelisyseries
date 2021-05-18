import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [ content, setContent ] = useState([]);

	useEffect(() => {
		fetch(url).then((res) => res.json()).then((data) => setContent(data.results.slice(0, 5)));
	}, []);

	return content;
};

export default useFetch;
