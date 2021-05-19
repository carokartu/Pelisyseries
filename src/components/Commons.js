import styled from 'styled-components';

export const CenteredItems = styled.div`
	display: flex;
	justify-content: ${(props) => props.justifyContent || 'center'};
	flex-direction: ${(props) => props.flexDirection};
	flex-wrap: ${(props) => props.flexWrap || 'wrap'};
	align-items: ${(props) => props.alignItems || 'space-between'};
	margin: ${(props) => props.margin || '0'};
`;

export const SectionTitle = styled.h1`
	color: ${({ theme }) => theme.colors.text};
	display: flex;
	align-items: center;
	cursor: pointer;
	font-size: 30px;
	font-family: ${({ theme }) => theme.fonts.titles.section};
	letter-spacing: 4px;
	margin: 20px;
`;

export const CardTitle = styled.h2`
	color: ${({ theme }) => theme.colors.text};
	font-size: 22px;
	max-width: 250px;
	text-align: center;
	letter-spacing: 1px;
	font-family: ${({ theme }) => theme.fonts.titles.card};
`;

export const ImgContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 250px;
	min-height: 375px;
	overflow: hidden;

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
