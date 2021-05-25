import { StyledText, CenteredItems } from '../components/Commons';
import Rating from '../components/Rating';
import Card from '../components/Card';
import { StyledLink } from '../components/NavBar';
import { POSTERIMAGE, noAmountFound } from '../utils/variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookSquare, faImdb, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export const DetailsContainer = styled.div`
	display: flex;
	align-items: center;
	min-width: 220px;
	width: ${(props) => props.width || '80%'};
	padding: 15px;
	text-align: justify;
	@media ${({ theme }) => theme.breakpoints.medium} {
		flex-direction: ${({ flexDirection }) => flexDirection};
	}
	@media ${({ theme }) => theme.breakpoints.small} {
		flex-direction: ${({ flexDirection }) => flexDirection};
	}
`;

export const StyledIcon = styled(FontAwesomeIcon)`
	color: lightblue;
	font-size: 30px;
`;

const Info = ({ detail }) => {
	return (
		<ThemeProvider theme={theme}>
			<DetailsContainer flexDirection="column">
				<Card key={detail.id} isDetail={false} title={''} img={POSTERIMAGE + detail.poster_path} />
				<CenteredItems flexDirection="column">
					<StyledText fontSize="28px">{detail.title}</StyledText>
					<DetailsContainer width="160px">
						<Rating rating={detail.vote_average} />
					</DetailsContainer>
					<StyledText>{detail.overview}</StyledText>
					<StyledText>Duración: {detail.runtime}' </StyledText>
					<StyledText>
						Géneros:{' '}
						{detail.genres &&
							detail.genres.map((genre) => (
								<StyledLink margin="3px" color={theme.colors.text} shadow={theme.linkShadow.cardLink}>
									{genre.name}{' '}
								</StyledLink>
							))}
					</StyledText>

					<StyledText>Presupuesto: {noAmountFound(detail.budget)}</StyledText>
					<StyledText>Recaudación: {noAmountFound(detail.revenue)}</StyledText>
					<StyledText>
						Producción:{' '}
						{detail.production_companies &&
							detail.production_companies.map((company) => company.name + '. ')}
					</StyledText>
					<DetailsContainer width="210px">
						<StyledLink>
							<StyledIcon icon={faImdb} />
						</StyledLink>
						<StyledLink>
							<StyledIcon icon={faTwitter} />
						</StyledLink>
						<StyledLink>
							<StyledIcon icon={faFacebookSquare} />
						</StyledLink>
						<StyledLink>
							<StyledIcon icon={faInstagram} />
						</StyledLink>
						<StyledLink>
							<StyledIcon icon={faLink} />
						</StyledLink>
					</DetailsContainer>
				</CenteredItems>
			</DetailsContainer>
		</ThemeProvider>
	);
};

export default Info;
