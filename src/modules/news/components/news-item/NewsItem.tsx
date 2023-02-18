import { FC } from 'react';
import styles from './NewsItem.module.scss';
import { INews } from '../../api/dto/news.in';
import { TypeDeletingNewsHandler } from '../../pages/News';
import { DeleteForever } from '@mui/icons-material';
import { Button } from '@mui/material';

interface IProps {
	news: INews;
	deleteHandler: TypeDeletingNewsHandler;
}

const NewsItem: FC<IProps> = ({ news, deleteHandler }) => {
	return (
		<div className={styles.item}>
			<div>
				<h2>{news.title}</h2>
				<p>{news.body}</p>
			</div>
			<DeleteForever
				color='error'
				sx={{ cursor: 'pointer', marginLeft: '2rem' }}
				onClick={() => deleteHandler(news.id)}
				fontSize={undefined}
			/>
		</div>
	);
};

export default NewsItem;
