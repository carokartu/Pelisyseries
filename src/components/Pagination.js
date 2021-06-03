import styled, { ThemeProvider } from 'styled-components';
import { StyledText } from '../components/Commons';
import { theme } from '../styles/theme';

const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PageNumber = styled.button`
	padding: 7px;
	margin: 4px;
	border: 0;
	background-color: ${({ theme }) => theme.colors.primary};
	color: white;
`;

const Pagination = ({ page, totalPages }) => {
	//    const pages = []
	//    for (let i = 0; i < totalPages; i++) {
	//        pages.push(i)
	//    }
	return (
		<ThemeProvider theme={theme}>
			<PaginationContainer>
				<StyledText>
					<PageNumber>{page}</PageNumber> de <PageNumber>{totalPages} </PageNumber>
				</StyledText>
			</PaginationContainer>
		</ThemeProvider>
	);
};

export default Pagination;
