import { StyledLink } from '../components/NavBar';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export const ButtonsBar = styled.div`
	display: flex;
	justify-content: center;
	margin: 50px;
	align-items: center;
`;

const DetailButtons = () => {
	const createButton = (text) => {
		const buttons = [];
		buttons.push(
			<StyledLink
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
				{createButton('INFO')}
				{createButton('REPARTO')}
				{createButton('VIDEOS')}
				{createButton('SIMILARES')}
			</ThemeProvider>
		</ButtonsBar>
	);
};

export default DetailButtons;
