import styled from 'styled-components';

export const CenteredItems = styled.div`
	display: flex;
	justify-content: ${(props) => props.justifyContent || 'center'};
	flex-direction: ${(props) => props.flexDirection};
	flex-wrap: ${(props) => props.flexWrap || 'wrap'};
	margin: ${(props) => props.margin || '0'};
`;

export const SectionTitle = styled.h1`
	color: ${({ theme }) => theme.colors.text};
	display: flex;
	align-items: center;
	cursor: pointer;
	font-size: ${({ theme }) => theme.sizes.sectionTitle};
	font-family: ${({ theme }) => theme.fonts.titles.section};
	letter-spacing: 4px;
	margin: 20px;
	@media ${({ theme }) => theme.breakpoints.small} {
		font-size: ${({ theme }) => theme.sizes.mobileTitle};
	}
`;

export const CardTitle = styled.h2`
	color: ${({ theme }) => theme.colors.text};
	font-size: ${({ theme }) => theme.sizes.cardTitle};
	max-width: 200px;
	text-align: center;
	letter-spacing: 1px;
	font-family: ${({ theme }) => theme.fonts.titles.card};
	@media ${({ theme }) => theme.breakpoints.small} {
		font-size: ${({ theme }) => theme.sizes.mobileTitle};
		max-width: 150px;
	}
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
	@media (max-width: 1100px) {
		max-width: 200px;
		min-height: 200px;
	}
	@media ${({ theme }) => theme.breakpoints.small} {
		max-width: 165px;
	}
`;

export const StyledText = styled.p`
	font-family: ${({ theme }) => theme.fonts.titles.card};
	color: ${({ theme }) => theme.colors.text};
	font-size: ${(props) => props.fontSize || '18px'};
	margin: 5px;
	margin-left: 20px;
	letter-spacing: 1.5px;
`;

export const SectionButton = styled.button`
	border: none;
	background-color: transparent;
	color: white;
	padding: 5px;
	font-size: ${({ theme }) => theme.sizes.cardTitle};
	letter-spacing: 3px;
	font-family: ${({ theme }) => theme.fonts.alternative3};
	&:hover {
		filter: brightness(2);
	}
	@media (max-width: 600px) {
		padding: 0;
	}
`;
