import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { CenteredItems, CardTitle, ImgContainer } from './Commons';
import NoPhoto from '../utils/No-Photo-Available.jpg';
import styled from 'styled-components';
import { ShowDetails } from '../views/CardDetails';

export const BackdropImage = styled.div`
	left: 0;
	right: 0;
	top: 12px;
	overflow: hidden;
	position: relative;
	z-index: 1;
	@media ${({ theme }) => theme.breakpoints.small} {
		top: 10px;
	}
	img {
		filter: contrast(1.3);
		width: 100%;
	}
`;

const Card = ({ title, img, isDetail, content }) => {
	return (
		<div>
			{isDetail ? (
				<CenteredItems flexDirection="column">
					<BackdropImage>
						<img alt={`poster de ` + title} src={img || NoPhoto} />
					</BackdropImage>
					<ShowDetails detail={content} />
				</CenteredItems>
			) : (
				<CenteredItems flexDirection="column" margin="5px">
					<ImgContainer>
						<img alt={`poster de ` + title} src={img || NoPhoto} />
					</ImgContainer>
					<ThemeProvider theme={theme}>
						<CardTitle>{title}</CardTitle>
					</ThemeProvider>
				</CenteredItems>
			)}
		</div>
	);
};

export default Card;
