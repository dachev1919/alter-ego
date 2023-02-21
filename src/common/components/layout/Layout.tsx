import React, { FC, useEffect } from 'react';
import Header from '../header/Header';
import Routers from '../../../routes/Routers';
import Footer from '../footer/Footer';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from '../../../utils/theme';
import i18n from 'i18next';

const Layout: FC = () => {
	useEffect(() => {
		const lng = navigator.language;
		i18n.changeLanguage(lng);
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				minHeight: '100vh',
				flexDirection: 'column',
				justifyContent: 'flex-start'
			}}
		>
			<ThemeProvider theme={theme}>
				<Header />
				<Routers />
				<Footer />
			</ThemeProvider>
		</Box>
	);
};

export default Layout;
