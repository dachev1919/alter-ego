import { FC } from 'react';
import { INews } from '../../api/dto/news.in';
import { TypeDeletingNewsHandler } from '../../pages/News';
import { DeleteForever } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

interface IProps {
	news: INews;
	deleteHandler: TypeDeletingNewsHandler;
}

const NewsItem: FC<IProps> = ({ news, deleteHandler }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				marginBottom: '1.5rem',
				alignItems: 'center',
				borderBottom: '1px solid #f6f6f6',
				paddingBottom: '1.5rem'
			}}
		>
			<Box>
				<Typography sx={{ textTransform: 'capitalize' }} variant='h5'>
					{news.title}
				</Typography>
				<Typography sx={{ marginTop: '1rem', color: '#858585' }}>
					{news.body}
				</Typography>
			</Box>
			<DeleteForever
				color='error'
				sx={{ cursor: 'pointer', marginLeft: '2rem' }}
				onClick={() => deleteHandler(news.id)}
				fontSize={undefined}
			/>
		</Box>
	);
};

export default NewsItem;
