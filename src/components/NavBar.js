import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import Home from './Home';
import Movies from './Movies';
import Series from './Series';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

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
					<Route path="/peliculas/:titles" component={Movies} />
					<Route path="/series/:titles" component={Series} />
				</Switch>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default NavBar;
