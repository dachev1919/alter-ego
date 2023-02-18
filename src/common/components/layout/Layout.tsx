import React, { FC } from 'react';
import Header from '../header/Header';
import Routers from '../../../routes/Routers';
import Footer from '../footer/Footer';

const Layout: FC = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Routers />
			<Footer />
		</div>
	);
};

export default Layout;
