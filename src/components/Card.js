import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { CenteredItems, CardTitle, ImgContainer } from './Commons';

const Card = ({ title, img }) => {
	return (
		<CenteredItems flexDirection="column" margin="5px">
			<ImgContainer>
				<CenteredItems flexDirection="column" margin="0">
					<img alt={`poster de` + title} src={img} />
				</CenteredItems>
				<ThemeProvider theme={theme}>
					<CardTitle>{title}</CardTitle>
				</ThemeProvider>
			</ImgContainer>
		</CenteredItems>
	);
};

export default Card;
