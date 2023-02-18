import React, { FC, useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { useGetNewsQuery } from '../api/repository';
import { INewsArray } from '../api/dto/news.in';
import NewsList from '../components/news-list/NewsList';

export type TypeDeletingNewsHandler = (id: number) => void;
const STEP: number = 10;
const LIMIT: number = 100;

const News: FC = () => {
	const [start, setStart] = useState<number>(0);
	const [end, setEnd] = useState<number>(STEP);
	const { data, error, isLoading } = useGetNewsQuery({
		_start: start,
		_end: end
	});
	let news: INewsArray | [] = data && data.news ? data.news : [];

	if (error) {
		return <h1>error</h1>;
	}

	if (isLoading || !news) {
		return <h1>data is loading</h1>;
	}

	const loadMoreHandler = () => {
		setStart(start + STEP);
		setEnd(end + STEP);
	};

	return (
		<section>
			<Container maxWidth='xl'>
				<Typography
					sx={{ textAlign: 'center', padding: '2rem 0' }}
					variant='h3'
					component='h1'
				>
					News
				</Typography>
				<NewsList news={news} />
				{end < LIMIT && news.length > 0 && (
					<Button
						sx={{
							display: 'block',
							margin: '0 auto'
						}}
						variant='contained'
						onClick={loadMoreHandler}
					>
						Load More
					</Button>
				)}
			</Container>
		</section>
	);
};

export default News;
