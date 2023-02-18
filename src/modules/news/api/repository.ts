import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../core/api/base-query';
import { transformResponse } from './utils/utils';
import { INewsArray } from './dto/news.in';

export interface IBaseNewsParams {
	_start: number;
	_end: number;
}

export interface INewsData {
	news: INewsArray;
}

export const newsApi = createApi({
	reducerPath: 'newsApi',
	baseQuery: baseQuery,
	endpoints: builder => ({
		getNews: builder.query<INewsData, IBaseNewsParams>({
			query: ({ _start, _end }) => ({
				url: '/posts',
				params: {
					_start: _start,
					_end: _end
				}
			}),
			transformResponse
		})
	})
});

export const { useGetNewsQuery } = newsApi;
