import React, { FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
	Menu,
	Container,
	Avatar,
	Button,
	Tooltip,
	MenuItem,
	Typography,
	IconButton,
	Toolbar,
	Box,
	AppBar,
	useScrollTrigger
} from '@mui/material';

import { Link } from 'react-router-dom';
import { AutoAwesome } from '@mui/icons-material';

interface IHeaderLinks {
	title: string;
	link: string;
}

const LINKS: IHeaderLinks[] = [
	{
		title: 'News',
		link: '/alter-ego/news'
	}
];
const SETTINGS: string[] = ['Profile', 'Account', 'Logout'];

interface Props {
	children: React.ReactElement;
}

function HideOnScroll(props: Props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
}

const Header: FC = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<HideOnScroll>
			<AppBar
				style={{
					background: 'rgba(0,0,0,0.8)',
					backdropFilter: 'saturate(180%) blur(20px)'
				}}
			>
				<Container maxWidth='xl'>
					<Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
						<Box
							sx={{
								display: { xs: 'none', md: 'flex' },
								alignItems: 'center',
								mr: 1
							}}
						>
							<Link to='/alter-ego'>
								<Typography
									sx={{ color: '#fff', alignItems: 'center', display: 'flex' }}
									variant='h6'
									component='p'
								>
									<AutoAwesome sx={{ mr: 1 }} />
									AlterEGO
								</Typography>
							</Link>
						</Box>
						<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left'
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left'
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' }
								}}
							>
								{LINKS.map(({ title, link }) => (
									<Link key={title} to={link}>
										<Button color='primary' sx={{ color: '#3a3a3a' }}>
											{title}
										</Button>
									</Link>
								))}
							</Menu>
						</Box>
						<Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
							<Link to='/alter-ego'>
								<Typography
									sx={{ color: '#fff', alignItems: 'center', display: 'flex' }}
									variant='h6'
									component='p'
								>
									<AutoAwesome sx={{ mr: 1 }} />
									AlterEGO
								</Typography>
							</Link>
						</Box>
						<Box
							sx={{
								display: { xs: 'none', md: 'flex' },
								marginLeft: '-5.5rem'
							}}
						>
							{LINKS.map(({ title, link }) => (
								<Link key={title} to={link}>
									<Button sx={{ color: '#fff' }}>{title}</Button>
								</Link>
							))}
						</Box>

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
								{SETTINGS.map(setting => (
									<MenuItem key={setting} onClick={handleCloseUserMenu}>
										<Typography textAlign='center'>{setting}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</HideOnScroll>
	);
};

export default Header;
