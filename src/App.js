// import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const GlobalStyle = createGlobalStyle`
body {
	margin: 0;
	background-color: ${({ theme }) => theme.colors.background};
}
* {
	box-sizing: border-box;
}
`;

const App = () => {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<NavBar />
			</ThemeProvider>
		</div>
	);
};

export default App;
