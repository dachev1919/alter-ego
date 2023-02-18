import React, { FC } from 'react';
import styles from './Footer.module.scss';
import { Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface IFooterLinks {
	title: string;
	link: string;
}

const LINKS: IFooterLinks[] = [
	{
		title: 'Home',
		link: '/alter-ego'
	},
	{
		title: 'News',
		link: '/alter-ego/news'
	},
	{
		title: 'Profile',
		link: '/alter-ego/profile'
	}
];

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Container maxWidth='xl'>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						mr: 1
					}}
				>
					<ul className={styles.pages}>
						{LINKS.map(({ title, link }) => (
							<li key={title}>
								<Link to={link}>{title}</Link>
							</li>
						))}
					</ul>
					<p className={styles.developed}>Developed by Oleh Dachev</p>
				</Box>
			</Container>
		</footer>
	);
};

export default Footer;
