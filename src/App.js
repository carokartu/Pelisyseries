import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Movies from './views/Movies';
import Series from './views/Series';
import CardDetails from './components/CardDetails';
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
						<Route path="/detalle/:id" component={CardDetails} />
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
};

export default App;
