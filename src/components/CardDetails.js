import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { retrieveInfo } from '../utils/variables';
import { BACKDROPIMAGE } from '../utils/variables';
import Card from './Card';

const CardDetails = () => {
	const [ detail, setDetail ] = useState([]);
	const params = useParams();

	useEffect(() => {
		fetch(retrieveInfo(`${'movie' || 'tv'}/${params.id}`))
			.then((res) => res.json())
			.then((data) => setDetail(data));
	}, []);
	return (
		<Card
			isDetail={true}
			key={detail.title || detail.name}
			title={detail.title || detail.name}
			img={BACKDROPIMAGE + detail.backdrop_path}
		/>
	);
};

export default CardDetails;
