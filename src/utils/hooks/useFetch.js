import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

const useFetch = (url) => {
	// const params = useParams();
	const [ content, setContent ] = useState([]);

	useEffect(() => {
		fetch(url).then((res) => res.json()).then((data) => setContent(data.results.slice(0, 5)));

		// fetch(url).then(res=>res.json()).then(data=>setContent(data));
	}, []);

	return content;
};

export default useFetch;
