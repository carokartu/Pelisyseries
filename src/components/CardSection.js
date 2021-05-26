import { Link } from 'react-router-dom';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CenteredItems, SectionTitle, SectionButton } from './Commons';
import { stringToUpperCase, POSTERIMAGE } from '../utils/variables';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
text-decoration: none;
`;

const StyledSection = styled.section`
	margin-top: 110px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (min-width: 840px) and (max-width: 1050px) {
		max-width: 80%;
		margin-left: 100px;
	}
`;

const StyledIcon = styled(FontAwesomeIcon)`
margin-left: 25px;
`;

const CardSection = ({ sectionTitle, content }) => {
	return (
		<StyledSection>
			<SectionButton>
				<SectionTitle>
					{stringToUpperCase(sectionTitle)}
					<StyledIcon icon={faArrowRight} />
				</SectionTitle>
			</SectionButton>
			<CenteredItems flexDirection="row">
				{content.map((item) => (
					<StyledLink key={item.id} to={`${item.title ? 'pelicula' : 'serie'}/detalle/${item.id}`}>
						<Card
							key={item.title || item.name}
							title={item.title || item.name}
							img={POSTERIMAGE + item.poster_path}
						/>
					</StyledLink>
				))}
			</CenteredItems>
		</StyledSection>
	);
};

export default CardSection;
