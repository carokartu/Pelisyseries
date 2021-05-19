import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faVideo, faTv } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../styles/theme';
import styled, { ThemeProvider } from 'styled-components';

const StyledNavBar = styled.nav`
	display: flex;
	background-color: ${({ theme }) => theme.colors.primary};
}
`;

const StyledLink = styled(Link)`
color: ${({ theme }) => theme.colors.secondary};
margin: 15px;
&:hover {
	color: ${({ theme }) => theme.colors.text};
}
@media (max-width: ${theme.breakpoints.small}) {
	
}
`;

const NavBar = () => {
	return (
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
		</ThemeProvider>
	);
};

export default NavBar;
