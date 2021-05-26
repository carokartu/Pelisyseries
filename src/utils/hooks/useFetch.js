import { useState, useEffect } from 'react';
// import Loader from '../../components/Loader';
// import { useParams } from 'react-router-dom';

const useFetch = (url) => {
	// const params = useParams();
	const [ content, setContent ] = useState([]);
	// const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		fetch(url).then((res) => res.json()).then(
			(data) => setContent(data.results.slice(0, 5))

			// data.results.map((result) => return result.media_type))
		);
	}, []);

	return content;
};

export default useFetch;
