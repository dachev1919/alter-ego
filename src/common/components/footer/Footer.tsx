import React, { FC } from 'react';
import { Container, Box, List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import styles from './Footer.module.scss';
import i18next from 'i18next';

interface IFooterLinks {
	title: string;
	link: string;
}

const Footer: FC = () => {
	const LINKS: IFooterLinks[] = [
		{
			title: i18next.t('footer.footerLink1'),
			link: '/alter-ego'
		},
		{
			title: i18next.t('footer.footerLink2'),
			link: '/alter-ego/news'
		},
		{
			title: i18next.t('footer.footerLink3'),
			link: '/alter-ego/profile'
		}
	];

	const theme = useTheme();

	return (
		<footer className={styles.footer}>
			<Container maxWidth='xl'>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column'
					}}
				>
					<List sx={{ display: 'flex' }}>
						{LINKS.map(({ title, link }) => (
							<ListItem key={title} sx={{ fontSize: '.9rem' }}>
								<Link to={link}>{title}</Link>
							</ListItem>
						))}
					</List>
					<Typography
						component='p'
						sx={{
							color: theme.custom!['gray-400'],
							userSelect: 'none',
							fontSize: '.7rem'
						}}
					>
						{i18next.t('footer.developedBy')}
					</Typography>
				</Box>
			</Container>
		</footer>
	);
};

export default Footer;
