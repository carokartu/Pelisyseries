import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faVideo, faTv } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../styles/theme';
import Form from './Form';
import styled, { ThemeProvider } from 'styled-components';

const StyledNavBar = styled.nav`
	display: flex;
	background-color: ${({ theme }) => theme.colors.primary};
	position: fixed;
	top: 0;
	z-index: 3;
	right: 0;
	left: 0;

	@media ${({ theme }) => theme.breakpoints.small} {
		background-color: ${({ theme }) => theme.colors.background};
		padding: 7px;
	}
}
`;

export const StyledLink = styled(Link)`
color: ${({ color }) => color};
text-decoration: none;
margin: 15px;
box-shadow: ${({ shadow }) => shadow};
font-size: ${({ fontSize }) => fontSize};
letter-spacing: ${({ letterSpacing }) => letterSpacing};
font-family: ${({ fontFamily }) => fontFamily};
&:hover {
	color: ${({ theme }) => theme.colors.text};
	filter: brightness(2);
	transition: 0.1s;
}
&:focus {
		border-bottom: ${({ border }) => border};
	}
	@media (max-width: 700px) {
		margin: ${({ margin }) => margin};
		font-size: ${({ fontSize }) => fontSize}
	}
`;

const StyledIcon = styled(FontAwesomeIcon)`
@media ${({ theme }) => theme.breakpoints.small} {
	font-size: 25px;
	color: ${({ theme }) => theme.colors.primary};
	}
`;

const NavBar = () => {
	return (
		<ThemeProvider theme={theme}>
			<StyledNavBar>
				<StyledLink margin="6px" color={theme.colors.secondary} to="/">
					<StyledIcon icon={faHome} size="2x" />
				</StyledLink>
				<StyledLink margin="6px" color={theme.colors.secondary} to="/peliculas">
					<StyledIcon icon={faVideo} size="2x" />
				</StyledLink>
				<StyledLink margin="6px" color={theme.colors.secondary} to="/series">
					<StyledIcon icon={faTv} size="2x" />
				</StyledLink>
				<Form />
			</StyledNavBar>
		</ThemeProvider>
	);
};

export default NavBar;
