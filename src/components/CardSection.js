import { Link } from 'react-router-dom';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CenteredItems, SectionTitle } from './Commons';
import Pagination from './Pagination'
import { stringToUpperCase, POSTERIMAGE } from '../utils/variables';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
text-decoration: none;
`;

const StyledSection = styled.section`
	padding-top: 110px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (min-width: 840px) and (max-width: 1050px) {
		max-width: 80%;
		margin-left: 100px;
	}
`;

export const StyledIcon = styled(FontAwesomeIcon)`
margin-left: 25px;
`;

const CardSection = ({ sectionTitle, content, isPreview }) => {
	const title = (
		<SectionTitle>
			{stringToUpperCase(sectionTitle)}
			<StyledIcon icon={faArrowRight} />
		</SectionTitle>
	);
	const cards = (item) => {
		return (
			<StyledLink key={item.id} to={`${item.title ? 'pelicula' : 'serie'}/detalle/${item.id}`}>
				<Card
					key={item.id}
					title={item.title || item.name}
					img={POSTERIMAGE + item.poster_path}
					isDetail={false}
				/>
			</StyledLink>
		);
	} 
	const type = (title) => {
		if (title.includes('series')) {
			if (title.includes('tendencia')) {
				return 'series/tendencia'
			} else if (title.includes('populares')) {
				return 'series/populares'
			} else if (title.includes('mejores')) {
				return 'series/mejorcalificadas'
			} else if (title.includes('al aire')) {
				return 'series/alaire'
			}
		} else if (stringToUpperCase(title).includes('películas')) {
			if (title.includes('tendencia')) {
				return 'peliculas/tendencia'
			} else if (title.includes('populares')) {
				return 'peliculas/populares'
			} else if (title.includes('mejores')) {
				return 'peliculas/mejorcalificadas'
			} else if (title.includes('al aire')) {
				return 'peliculas/proximosestrenos'
			}
		}
	}
	return (
		<StyledSection>
			{isPreview ? <StyledLink to={`/${type(sectionTitle)}/pagina/1/`}>{title}</StyledLink> : title}
			<CenteredItems flexDirection="row">
				{!isPreview && content ? (
					content?.results?.map((item) => cards(item))
				) : (
					content.map((item) => (
						cards(item)
					))
				)}
			</CenteredItems>
				{!isPreview && <Pagination page={content.page} totalPages={content.total_pages}/>}
		</StyledSection>
	);
};

export default CardSection;
