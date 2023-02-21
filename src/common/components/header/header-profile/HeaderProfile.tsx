import React, { FC } from 'react';
import {
	Avatar,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Tooltip
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { userAuthState } from '../../../../modules/auth/api/user-state';
import i18next from 'i18next';

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

	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

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
		</Box>
	);
};

export default HeaderProfile;
