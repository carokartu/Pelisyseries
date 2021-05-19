import { Link } from 'react-router-dom';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CenteredItems, SectionTitle } from './Commons';
import { stringToUpperCase } from '../utils/variables';
import styled from 'styled-components';

const IMAGE = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

export const StyledLink = styled(Link)`
text-decoration: none;
`;

const StyledSection = styled.section`
	margin-top: 60px;
	margin-bottom: 100px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
margin-left: 25px;
`;

const CardSection = ({ sectionTitle, content }) => {
	return (
		<StyledSection>
			<SectionTitle>
				{stringToUpperCase(sectionTitle)}
				<StyledIcon icon={faArrowRight} />
			</SectionTitle>
			<CenteredItems flexDirection="row">
				{content.map((movie) => (
					<StyledLink key={movie.id} to={`/detalle/${movie.id}`}>
						<Card
							key={movie.title || movie.name}
							title={movie.title || movie.name}
							img={IMAGE + movie.backdrop_path}
						/>
					</StyledLink>
				))}
			</CenteredItems>
		</StyledSection>
	);
};

export default CardSection;
