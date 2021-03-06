import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Movies from './views/Movies';
import Series from './views/Series';
import AllResults from './views/AllResults';
import Cast from './views/Cast';
import Similar from './views/Similar';
import Videos from './views/Videos';
import CardDetails from './views/CardDetails';
import ShowDetails from './views/CardDetails';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const GlobalStyle = createGlobalStyle`
body {
	margin: 0;
	background-color: ${({ theme }) => theme.colors.secondary};
}
* {
	box-sizing: border-box;
}
`;

const App = () => {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<BrowserRouter>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/peliculas/" component={Movies} />
						<Route path="/series/" component={Series} />
						<Route path="/:multimedia/detalle/:id/" component={CardDetails} />
						<Route path="/:multimedia/:categoria/pagina/1/" component={AllResults} />
						<Route path="/:categoria/pagina/1/" component={AllResults} />

						<Route path="/:multimedia/detalle/:id/info/" component={ShowDetails} />
						<Route path="/:multimedia/detalle/:id/reparto/" component={Cast} />
						<Route path="/:multimedia/detalle/:id/videos/" component={Videos} />
						<Route path="/:multimedia/detalle/:id/similares/" component={Similar} />
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
};

export default App;
