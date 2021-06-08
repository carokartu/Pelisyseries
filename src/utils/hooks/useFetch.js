import { useState, useEffect } from 'react';
// import Loader from '../../components/Loader';
// import { useParams } from 'react-router-dom';

const useFetch = (url, isPreview) => {
	// const params = useParams();
	const [ content, setContent ] = useState([]);
	// const [ isLoading, setIsLoading ] = useState(true);
	const defineView = (data) => {
		if (isPreview) {
			return data.results.slice(0, 5);
		} else if (!isPreview) {
			return data;
		}
	};

	useEffect(
		() => {
			fetch(url).then((res) => res.json()).then((data) => setContent(defineView(data)));
		},
		[ url ]
	);

	return content;
};

export default useFetch;
