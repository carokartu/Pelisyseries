import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { CenteredItems, CardTitle, ImgContainer } from './Commons';
import NoPhoto from '../utils/No-Photo-Available.jpg';

const Card = ({ title, img }) => {
	return (
		<CenteredItems flexDirection="column" margin="5px">
			<ImgContainer>
				<img alt={`poster de ` + title} src={img || NoPhoto} />
			</ImgContainer>
			<CenteredItems flexDirection="column">
				<ThemeProvider theme={theme}>
					<CardTitle>{title}</CardTitle>
				</ThemeProvider>
			</CenteredItems>
		</CenteredItems>
	);
};

export default Card;
