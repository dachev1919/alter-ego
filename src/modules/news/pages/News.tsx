import React, { FC, useState } from 'react';
import { Button } from '@mui/material';
import { useGetNewsQuery } from '../api/repository';
import { INewsArray } from '../api/dto/news.in';
import NewsList from '../components/news-list/NewsList';
import Section from '../../../common/components/section/Section';
import i18next from 'i18next';

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
		return <h1>{i18next.t('newsPage.loadingDataError')}</h1>;
	}

	if (isLoading || !news) {
		return <h1>{i18next.t('newsPage.dataLoading')}</h1>;
	}

	const loadMoreHandler = () => {
		setStart(start + STEP);
		setEnd(end + STEP);
	};

	return (
		<Section title={i18next.t('newsPage.sectionTitle')}>
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
		</Section>
	);
};

export default News;
