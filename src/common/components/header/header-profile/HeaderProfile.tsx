import React, { FC, useState } from 'react';
import {
	Avatar,
	Box,
	FormControl,
	IconButton,
	Menu,
	MenuItem,
	Select,
	Tooltip
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { userAuthState } from '../../../../modules/auth/api/user-state';
import i18next from 'i18next';
import { styled } from '@mui/styles';
import { setLang } from '../api/lang-slice';

const CustomSelect = styled(Select)(() => ({
	width: 60,
	'&.MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: '#a6a6a6',
			color: '#a6a6a6'
		},
		'& svg': {
			right: '2px',
			color: '#a6a6a6'
		},
		'&:hover fieldset': {
			borderColor: '#858585'
		},
		'&.Mui-focused fieldset': {
			borderColor: 'white'
		}
	}
}));

interface IHeaderProfileLinks {
	title: string;
	link: string;
	clickHandler?: () => void;
}

const HeaderProfile: FC = () => {
	const SETTINGS_IDENT: IHeaderProfileLinks[] = [
		{
			title: i18next.t('header.headerProfileLink1'),
			link: '/alter-ego/profile'
		},
		{
			title: i18next.t('header.headerProfileLink2'),
			link: '/alter-ego/logout',
			clickHandler: logoutHandler
		}
	];
	const SETTINGS_NOT_IDENT: IHeaderProfileLinks[] = [
		{
			title: i18next.t('header.headerProfileLink3'),
			link: '/alter-ego/sign-in'
		}
	];

	const { auth: isAuth } = useSelector((state: RootState) => state.userState);
	const dispatch = useDispatch();
	const settings: IHeaderProfileLinks[] = isAuth
		? SETTINGS_IDENT
		: SETTINGS_NOT_IDENT;
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
	const { lang } = useSelector((state: RootState) => state.langSlice);
	const [language, setLanguage] = React.useState(lang);

	const handleChange = (event: any) => {
		const value = event.target.value as string;
		setLanguage(value);
		dispatch(setLang(value));
	};

	function logoutHandler() {
		dispatch(userAuthState(false));
	}

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<Box>
			<Tooltip title='Open settings'>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar src='/broken-image.jpg' />
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: '45px' }}
				id='menu-appbar'
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{settings.map(({ title, link, clickHandler }) => (
					<MenuItem key={title} onClick={handleCloseUserMenu}>
						<Link onClick={clickHandler && logoutHandler} to={link}>
							{title}
						</Link>
					</MenuItem>
				))}
			</Menu>
			<FormControl size='small' sx={{ marginLeft: '1rem' }}>
				<CustomSelect
					sx={{ color: 'white' }}
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={language}
					onChange={e => handleChange(e)}
				>
					<MenuItem value='uk'>UK</MenuItem>
					<MenuItem value='en-US'>EN</MenuItem>
				</CustomSelect>
			</FormControl>
		</Box>
	);
};

export default HeaderProfile;
