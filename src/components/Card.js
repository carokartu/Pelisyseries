import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { CenteredItems, CardTitle, ImgContainer } from './Commons';
import NoPhoto from '../utils/No-Photo-Available.jpg';
import styled from 'styled-components';

export const BackdropImage = styled.div`
	position: relative;
	left: 0;
	right: 0;
	top: 0;
	img {
		filter: contrast(1.3);
		width: 100%;
		height: 100vh;
		@media ${({ theme }) => theme.breakpoints.medium} {
			height: 80vh;
		}
		@media ${({ theme }) => theme.breakpoints.small} {
			height: 60vh;
		}
	}
`;

const Card = ({ title, img, isDetail }) => {
	return (
		<div>
			{isDetail ? (
				<BackdropImage>
					<img alt={`poster de ` + title} src={img || NoPhoto} />
				</BackdropImage>
			) : (
				<CenteredItems flexDirection="column" margin="5px">
					<ImgContainer>
						<img alt={`poster de ` + title} src={img || NoPhoto} />
					</ImgContainer>
				</CenteredItems>
			)}
			<ThemeProvider theme={theme}>
				<CardTitle>{title}</CardTitle>
			</ThemeProvider>
		</div>
	);
};

export default Card;
