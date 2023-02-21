import React, { FC, useEffect } from 'react';
import Header from '../header/Header';
import Routers from '../../../routes/Routers';
import Footer from '../footer/Footer';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from '../../../utils/theme';
import i18n from 'i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const Layout: FC = () => {
	const { lang } = useSelector((state: RootState) => state.langSlice);

	useEffect(() => {
		i18n.changeLanguage(lang);
	}, [lang]);

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
