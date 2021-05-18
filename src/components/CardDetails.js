import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
	const [ detail, setDetail ] = useState([]);
	const params = useParams();

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=60f4e8225b109e5131a88c96f3fecfc0&language=es-ES&page=1`
		)
			.then((res) => res.json())
			.then((data) => setDetail(data));
	}, []);
	return <div>I'm the movie's details</div>;
};

export default CardDetails;
