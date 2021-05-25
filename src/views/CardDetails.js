import { useState, useEffect } from 'react';
import { useParams, BrowserRouter, Route, Switch } from 'react-router-dom';
import { retrieveInfo, BACKDROPIMAGE } from '../utils/variables';
import Card from '../components/Card';
import DetailButtons from '../components/DetailButtons';
import Info from '../views/Info';
import Cast from '../views/Cast';
import Similar from '../views/Similar';
import Videos from '../views/Videos';

export const ShowDetails = ({ detail }) => {
	return (
		<div>
			<BrowserRouter>
				<DetailButtons />
				<Info detail={detail} />

				<Switch>
					{/* <Route path="/detalle/:id" component={Info} /> */}
					<Route path="/detalle/id/reparto/" component={Cast} />
					<Route path="/detalle/id/videos/" component={Videos} />
					<Route path="/detalle/id/similares/" component={Similar} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

const CardDetails = () => {
	const [ detail, setDetail ] = useState([]);
	const params = useParams();

	useEffect(() => {
		fetch(retrieveInfo(`movie/${params.id}${'es-ES'}`)).then((res) => res.json()).then((data) => setDetail(data));
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
