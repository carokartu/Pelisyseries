import { StyledLink } from '../components/NavBar';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export const ButtonsBar = styled.div`
	display: flex;
	justify-content: center;
	padding: 50px;
	align-items: center;
`;

const DetailButtons = ({ id, type }) => {
	const createButton = (text, route) => {
		return (
			<StyledLink
				to={route}
				letterSpacing="3px"
				fontFamily={theme.fonts.alternative3}
				margin="4px"
				fontSize="18px"
				border="2px solid white"
				color="white"
			>
				{text}
			</StyledLink>
		);
	};
	return (
		<ButtonsBar>
			<ThemeProvider theme={theme}>
				<nav>
					{createButton('INFO', `/${type}/detalle/${id}/info`)}
					{createButton('REPARTO', `/${type}/detalle/${id}/reparto`)}
					{createButton(
						`${type === 'pelicula' ? 'VIDEOS' : 'EPISODIOS'}`,
						`/${type}/detalle/${id}/${type === 'pelicula' ? 'videos' : 'episodios'}`
					)}
					{createButton('SIMILARES', `/${type}/detalle/${id}/similares`)}
				</nav>
			</ThemeProvider>
		</ButtonsBar>
	);
};

export default DetailButtons;
