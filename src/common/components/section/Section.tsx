import React, { FC, ReactNode } from 'react';
import { Container, Grid, Typography } from '@mui/material';

interface ISection {
	title?: string | null;
	children?: ReactNode;
}

const Section: FC<ISection> = ({ title, children }) => {
	return (
		<Grid
			style={{
				padding: '4.375rem 0'
			}}
			container
			spacing={2}
		>
			<Grid item xs={12}>
				<Container maxWidth='xl'>
					{!!title && (
						<Typography
							sx={{ textAlign: 'center', padding: '2rem 0' }}
							variant='h3'
							component='h1'
						>
							{title}
						</Typography>
					)}
					{!!children && children}
				</Container>
			</Grid>
		</Grid>
	);
};

export default Section;
