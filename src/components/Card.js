import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { CenteredItems, CardTitle, ImgContainer } from './Commons';
import NoPhoto from '../utils/No-Photo-Available.jpg';
import styled from 'styled-components';

export const BackdropImage = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 62px;
	img {
		filter: contrast(1.3);
		width: 100%;
		height: 100vh;
	}
`;

const Card = ({ title, img, isDetail }) => {
	return (
		<CenteredItems flexDirection="column" margin="5px">
			{isDetail ? (
				<BackdropImage>
					<img alt={`poster de ` + title} src={img || NoPhoto} />
				</BackdropImage>
			) : (
				<ImgContainer>
					<img alt={`poster de ` + title} src={img || NoPhoto} />
				</ImgContainer>
			)}
			<CenteredItems flexDirection="column">
				<ThemeProvider theme={theme}>
					<CardTitle>{title}</CardTitle>
				</ThemeProvider>
			</CenteredItems>
		</CenteredItems>
	);
};

export default Card;
