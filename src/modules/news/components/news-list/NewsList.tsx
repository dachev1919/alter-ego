import React, { FC, useEffect, useState } from 'react';
import { INewsArray } from '../../api/dto/news.in';
import NewsItem from '../news-item/NewsItem';
import { Box, Typography } from '@mui/material';

interface INewsList {
	news: INewsArray;
}

export type TypeDeletingNewsHandler = (id: number) => void;

const NewsList: FC<INewsList> = ({ news }) => {
	const [newsData, setItemsData] = useState<INewsArray>([]);

	useEffect(() => {
		setItemsData(state => [...state, ...news]);
	}, [news]);

	const deletingNewsHandler: TypeDeletingNewsHandler = id => {
		const newItemsData = newsData.filter(item => item.id !== id);
		setItemsData(newItemsData);
	};

	return (
		<Box sx={{ padding: '1rem 0' }}>
			{newsData.length > 0 ? (
				newsData.map(item => (
					<NewsItem
						key={item.id}
						news={item}
						deleteHandler={deletingNewsHandler}
					/>
				))
			) : (
				<Typography
					sx={{ textAlign: 'center', padding: '10rem 0' }}
					variant='h4'
					component='p'
				>
					News list is empty
				</Typography>
			)}
		</Box>
	);
};

export default NewsList;
