import { Link } from 'react-router-dom';
import Card from './Card';
import { CenteredItems, SectionTitle } from './Commons';
import { stringToUpperCase } from '../utils/variables';
import styled from 'styled-components';

const IMAGE = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

export const StyledLink = styled(Link)`
text-decoration: none;
`;

const StyledSection = styled.section`margin-top: 50px;`;

const CardSection = ({ sectionTitle, content }) => {
	return (
		<StyledSection>
			<SectionTitle>{stringToUpperCase(sectionTitle)}</SectionTitle>
			<CenteredItems flexDirection="row">
				{content.map((movie) => (
					<StyledLink key={movie.id} to={`/detalle/${movie.id}`}>
						<Card key={movie.title} title={movie.title} img={IMAGE + movie.backdrop_path} />
					</StyledLink>
				))}
			</CenteredItems>
		</StyledSection>
	);
};

export default CardSection;
