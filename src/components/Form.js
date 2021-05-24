import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const StyledForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	input {
		font-size: ${({ theme }) => theme.sizes.cardTitle};
		font-family: ${({ theme }) => theme.fonts.titles.card};
		width: 450px;
		padding: 10px;
		border-radius: 3px;
		border: none;
		color: ${({ theme }) => theme.colors.background};
		&:focus {
			outline: 0;
			border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
		}
		@media ${({ theme }) => theme.breakpoints.medium} {
			width: 300px;
		}
		@media ${({ theme }) => theme.breakpoints.small} {
			width: 200px;
			padding: 5px;
		}
	}
`;

const Form = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('buscaste algo');
	};
	return (
		<ThemeProvider theme={theme}>
			<StyledForm type="submit" onSubmit={handleSubmit}>
				<label>
					<input type="text" placeholder="Búsqueda..." />
				</label>
			</StyledForm>
		</ThemeProvider>
	);
};

export default Form;
