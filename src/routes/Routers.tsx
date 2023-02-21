import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../modules/home/pages/Home';
import News from '../modules/news/pages/News';
import SignIn from '../modules/auth/pages/SignIn';
import Profile from '../modules/profile/pages/Profile';

const Routers: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/alter-ego' />}></Route>
			<Route path='/*' element={<Navigate to='/alter-ego' />}></Route>
			<Route path='/alter-ego' element={<Home />}></Route>
			<Route path='/alter-ego/news' element={<News />}></Route>
			<Route path='/alter-ego/sign-in' element={<SignIn />}></Route>
			<Route path='/alter-ego/profile' element={<Profile />}></Route>
		</Routes>
	);
};

export default Routers;
