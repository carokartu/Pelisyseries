import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../styles/theme';

const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const PageNumber = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	margin: 4px;
	line-height: 15px;
	width: 40px;
	cursor: pointer;
	font-size: 17px;
	font-family: ${({ theme }) => theme.fonts.alternative3};
	border: 0;
	background-color: ${({ theme }) => theme.colors.primary};
	color: white;
	border-radius: 20px;
	&:hover {
		background-color: ${({ theme }) => theme.colors.background};
	}
`;

const Pagination = ({ totalPages }) => {
	const pages = [];
	const maxPerPage = 5;
	for (let i = 1; i < totalPages; i++) {
		pages.push(i);
		console.log(pages);
	}
	return (
		<ThemeProvider theme={theme}>
			<PaginationContainer>
				<PageNumber>
					<FontAwesomeIcon icon={faArrowLeft} />
				</PageNumber>
				{pages.slice(0, maxPerPage).map((pageNum) => <PageNumber>{pageNum} </PageNumber>)}
				<PageNumber>...</PageNumber>
				<PageNumber>{totalPages}</PageNumber>
				<PageNumber>
					<FontAwesomeIcon icon={faArrowRight} />
				</PageNumber>
			</PaginationContainer>
		</ThemeProvider>
	);
};

export default Pagination;
