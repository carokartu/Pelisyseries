import { StyledLink } from '../components/NavBar';
import styled from 'styled-components';
import { SectionButton } from '../components/Commons';

export const ButtonsBar = styled.div`
	display: flex;
	justify-content: center;
	margin: 30px;
	align-items: center;
`;

const DetailButtons = () => {
	return (
		<ButtonsBar>
			<SectionButton>
				<StyledLink border="2px solid white" color="white">
					INFO
				</StyledLink>
			</SectionButton>
			<SectionButton>
				<StyledLink border="2px solid white" color="white">
					REPARTO
				</StyledLink>
			</SectionButton>
			<SectionButton>
				<StyledLink border="2px solid white" color="white">
					VIDEOS
				</StyledLink>
			</SectionButton>
			<SectionButton>
				<StyledLink border="2px solid white" color="white">
					SIMILARES
				</StyledLink>
			</SectionButton>
		</ButtonsBar>
	);
};

export default DetailButtons;
