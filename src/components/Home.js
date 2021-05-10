// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import Card from './Card';
import { ThemeProvider } from 'styled-components';
import { CenteredItems, SectionTitle } from './Commons';
import { theme } from '../styles/theme';

export const movies = [
	{
		title: 'Trendy movie 1'
	},
	{
		title: 'Trendy movie 2'
	},
	{
		title: 'Trendy movie 3'
	},
	{
		title: 'Trendy movie 4'
	},
	{
		title: 'Trendy movie 5'
	}
];

const Home = () => {
	// const [ content, setContent ] = useState([]);

	// useEffect(() => {
	// 	fetch(`https://api.themoviedb.org/3/movie/550?api_key=60f4e8225b109e5131a88c96f3fecfc0`)
	// 		.then((res) => res.json())
	// 		.then((data) => setContent(data));
	// }, []);
	return (
		<div>
			<ThemeProvider theme={theme}>
				<SectionTitle>Películas que son tendencia</SectionTitle>
				<CenteredItems flexDirection="row">
					{movies.map((movie) => <Card key={movie.title} title={movie.title} />)}
				</CenteredItems>
			</ThemeProvider>
		</div>
	);
};

export default Home;
