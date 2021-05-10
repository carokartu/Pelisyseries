import Example from '../components/Example.jpg';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { CenteredItems, CardTitle, ImgContainer } from './Commons';

const Card = ({ title }) => {
	return (
		<CenteredItems flexDirection="column" margin="5px" alignItems="flex-start">
			<ImgContainer>
				<img alt={Example} src={Example} />
			</ImgContainer>
			<ThemeProvider theme={theme}>
				<CardTitle>{title}</CardTitle>
			</ThemeProvider>
		</CenteredItems>
	);
};

export default Card;
