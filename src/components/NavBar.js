import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faVideo, faTv } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../styles/theme';
import styled, { ThemeProvider } from 'styled-components';

const StyledNavBar = styled.nav`
	display: flex;
	background-color: ${({ theme }) => theme.colors.primary};
	position: fixed;
	top: 0;
	z-index: 3;
	right: 0;
	left: 0;
}
`;

export const StyledLink = styled(Link)`
color: ${({ color }) => color};
text-decoration: none;
margin: 15px;
box-shadow: ${({ shadow }) => shadow};
&:hover {
	color: ${({ theme }) => theme.colors.text};
	filter: brightness(1.5);
	transition: 0.3s;
}
&:focus {
		border-bottom: ${({ border }) => border};
	}
	@media (max-width: 700px) {
		margin: ${({ margin }) => margin}
	}
`;

const NavBar = () => {
	return (
		<ThemeProvider theme={theme}>
			<StyledNavBar>
				<StyledLink color={theme.colors.secondary} to="/">
					<FontAwesomeIcon icon={faHome} size="2x" />
				</StyledLink>
				<StyledLink color={theme.colors.secondary} to="/peliculas">
					<FontAwesomeIcon icon={faVideo} size="2x" />
				</StyledLink>
				<StyledLink color={theme.colors.secondary} to="/series">
					<FontAwesomeIcon icon={faTv} size="2x" />
				</StyledLink>
			</StyledNavBar>
		</ThemeProvider>
	);
};

export default NavBar;
