import styled from 'styled-components';

export const CenteredItems = styled.div`
	display: flex;
	justify-content: ${(props) => props.justifyContent || 'center'};
	align-items: ${(props) => props.alignItems || 'center'};
	flex-direction: ${(props) => props.flexDirection};
	flex-wrap: ${(props) => props.flexWrap || 'wrap'};
	margin: ${(props) => props.margin || '0'};
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
	font-size: 25px;
	font-family: ${({ theme }) => theme.fonts.titles.card};
`;

export const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	img {
		width: 250px;
		height: 300px;
	}
	@media (max-width: 600px) {
	}
`;
