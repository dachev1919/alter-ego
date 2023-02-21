import React, { FC } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import i18next from 'i18next';

const Home: FC = () => {
	return (
		<Box
			height='calc(100vh - 64px)'
			display='flex'
			justifyContent='center'
			alignItems='center'
			flexDirection='column'
			sx={{ padding: '1rem' }}
		>
			<Paper
				elevation={3}
				sx={{ padding: '2rem 1.5rem', backgroundColor: 'primary.light' }}
			>
				<Typography color='white' variant='h3' sx={{ userSelect: 'none' }}>
					{i18next.t('greeting.home')}
				</Typography>
			</Paper>
		</Box>
	);
};

export default Home;
