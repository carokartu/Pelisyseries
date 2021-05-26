import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { retrieveInfo, BACKDROPIMAGE } from '../utils/variables';
import Card from '../components/Card';
import DetailButtons from '../components/DetailButtons';
import Info from '../views/Info';
// import Cast from '../views/Cast';
// import Similar from '../views/Similar';
// import Videos from '../views/Videos';

export const ShowDetails = ({ detail }) => {
	return (
		<div>
			<DetailButtons />
			<Info mediaType={useLocation().pathname} detail={detail} />
		</div>
	);
};

const CardDetails = () => {
	const [ detail, setDetail ] = useState([]);
	const params = useParams();
	const location = useLocation();

	useEffect(() => {
		fetch(retrieveInfo(`${location.pathname.includes('serie') ? 'tv' : 'movie'}/${params.id}${'es-ES'}`))
			.then((res) => res.json())
			.then((data) => setDetail(data));
	}, []);

	return (
		<div>
			<Card
				isDetail={true}
				key={detail.id}
				title={detail.title || detail.name}
				img={BACKDROPIMAGE + detail.backdrop_path}
				content={detail}
			/>
		</div>
	);
};

export default CardDetails;
