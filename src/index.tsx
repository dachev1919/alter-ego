import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Layout from './common/components/layout/Layout';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { CssBaseline } from '@mui/material';
import AppGlobalStyles from './common/components/app-global-style/AppGlobalStyles';
import './utils/i18n';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<CssBaseline />
		<AppGlobalStyles />
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	</Provider>
);
