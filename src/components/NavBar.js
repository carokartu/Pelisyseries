import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faVideo, faTv } from '@fortawesome/free-solid-svg-icons';
import Home from '../views/Home';
import Movies from '../views/Movies';
import Series from '../views/Series';
import CardDetails from './CardDetails';
import { theme } from '../styles/theme';
import styled, { ThemeProvider } from 'styled-components';

const StyledNavBar = styled.nav`
	display: flex;
	background-color: ${({ theme }) => theme.colors.secondary};
}
`;

const StyledLink = styled(Link)`
color: ${({ theme }) => theme.colors.text};
margin: 15px;
&:hover {
	color: ${({ theme }) => theme.colors.background};
}
@media (max-width: ${theme.breakpoints.small}) {
	
}
`;

const NavBar = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<StyledNavBar>
					<StyledLink to="/">
						<FontAwesomeIcon icon={faHome} size="2x" />
					</StyledLink>
					<StyledLink to="/peliculas">
						<FontAwesomeIcon icon={faVideo} size="2x" />
					</StyledLink>

					<StyledLink to="/series">
						<FontAwesomeIcon icon={faTv} size="2x" />
					</StyledLink>
				</StyledNavBar>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/peliculas/" component={Movies} />
					<Route path="/series/" component={Series} />
					<Route path="/detalle/:id" component={CardDetails} />
				</Switch>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default NavBar;
