import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTwitter, faFacebookSquare, faLink, faImdb, faInstagram } from '@fortawesome/free-solid-svg-icons';
import { retrieveInfo, BACKDROPIMAGE, POSTERIMAGE } from '../utils/variables';
import Card from '../components/Card';
import { StyledText, CenteredItems } from '../components/Commons';
import { StyledLink } from '../components/NavBar';
import DetailButtons from '../components/DetailButtons';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export const DetailsContainer = styled.div`
	display: flex;
	justify-content: 'space-evenly';
	align-items: center;
	width: ${(props) => props.width || '70%'};
	padding: 15px;
	@media ${({ theme }) => theme.breakpoints.large} {
		width: 100%;
	}
	@media ${({ theme }) => theme.breakpoints.medium} {
		width: 100%;
	}
	@media ${({ theme }) => theme.breakpoints.small} {
		width: 100%;
		flex-direction: ${({ flexDirection }) => flexDirection};
	}
`;

export const StyledIcon = styled(FontAwesomeIcon)`
	color: lightblue;

`;

export const ShowDetails = ({ detail }) => {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<DetailButtons />
				<DetailsContainer flexDirection="column">
					<Card key={detail.id} isDetail={false} title={''} img={POSTERIMAGE + detail.poster_path} />
					<CenteredItems flexDirection="column">
						<StyledText fontSize="35px">{detail.title}</StyledText>
						<DetailsContainer width="160px">
							<StyledIcon icon={faStar} />
							<StyledIcon icon={faStar} />
							<StyledIcon icon={faStar} />
							<StyledIcon icon={faStar} />
							<StyledIcon icon={faStar} />
						</DetailsContainer>
						<StyledText>{detail.overview}</StyledText>
						<StyledText>Duración: {detail.runtime}' </StyledText>
						<StyledText>
							Géneros:{' '}
							{detail.genres &&
								detail.genres.map((genre) => (
									<StyledLink
										margin="3px"
										color={theme.colors.text}
										shadow={theme.linkShadow.cardLink}
									>
										{genre.name}{' '}
									</StyledLink>
								))}
						</StyledText>
						<StyledText>Presupuesto: ${detail.budget}</StyledText>
						<StyledText>Recaudación: ${detail.revenue}</StyledText>
						<StyledText>
							Producción:{' '}
							{detail.production_companies &&
								detail.production_companies.map((company) => company.name + '. ')}
						</StyledText>
						<DetailsContainer width="210px">
							{/* <StyledIcon icon={faImdb} />
					<StyledIcon icon={faTwitter} />
					<StyledIcon icon={faFacebookSquare} />
					<StyledIcon icon={faInstagram} /> */}
							<StyledIcon icon={faLink} />
						</DetailsContainer>
					</CenteredItems>
				</DetailsContainer>
			</ThemeProvider>
		</div>
	);
};

const CardDetails = () => {
	const [ detail, setDetail ] = useState([]);
	const params = useParams();

	useEffect(() => {
		fetch(retrieveInfo(`movie/${params.id}${'es-ES'}`)).then((res) => res.json()).then((data) => setDetail(data));
	}, []);

	return (
		<div>
			<Card
				isDetail={true}
				key={detail.id}
				title={detail.title || detail.name}
				img={BACKDROPIMAGE + detail.backdrop_path}
				content={detail}
			/>
		</div>
	);
};

export default CardDetails;
