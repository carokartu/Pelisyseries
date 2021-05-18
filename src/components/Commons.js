import styled from 'styled-components';

export const CenteredItems = styled.div`
	display: flex;
	justify-content: ${(props) => props.justifyContent || 'center'};
	flex-direction: ${(props) => props.flexDirection};
	flex-wrap: ${(props) => props.flexWrap || 'wrap'};
	margin: ${(props) => props.margin || '0'};
	overflow: hidden;
`;

export const SectionTitle = styled.h1`
	color: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
	font-size: 30px;
	font-family: ${({ theme }) => theme.fonts.titles.section};
	letter-spacing: 2px;
	margin: 20px;
`;

export const CardTitle = styled.h2`
	color: ${({ theme }) => theme.colors.secondary};
	font-size: 23px;
	max-width: 250px;
	font-family: ${({ theme }) => theme.fonts.titles.card};
`;

export const ImgContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 250px;

	img {
		width: 100%;
	}
	&:hover {
		img {
			transform: scale(1.05);
			transition: 0.3s;
		}
	}

	@media (max-width: 600px) {
	}
`;
