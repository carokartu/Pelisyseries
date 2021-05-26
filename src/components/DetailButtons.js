import { StyledLink } from '../components/NavBar';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export const ButtonsBar = styled.div`
	display: flex;
	justify-content: center;
	margin: 50px;
	align-items: center;
	@media ${({ theme }) => theme.breakpoints.small} {
		margin: 30px;
	}
`;

const DetailButtons = (id) => {
	const createButton = (text, route) => {
		const buttons = [];
		buttons.push(
			<StyledLink
				to={route}
				letterSpacing="3px"
				fontFamily={theme.fonts.alternative3}
				margin="4px"
				fontSize={theme.sizes.cardTitle}
				border="2px solid white"
				color="white"
			>
				{text}
			</StyledLink>
		);
		return buttons;
	};
	return (
		<ButtonsBar>
			<ThemeProvider theme={theme}>
				<nav>
					{createButton('INFO', `/detalle/id/info`)}
					{createButton('REPARTO', `/detalle/id/reparto`)}
					{createButton('VIDEOS', `/detalle/id/videos`)}
					{createButton('SIMILARES', `/detalle/id/similares`)}
				</nav>
			</ThemeProvider>
		</ButtonsBar>
	);
};

export default DetailButtons;
