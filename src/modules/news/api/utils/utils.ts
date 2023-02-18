import { INewsArray } from '../dto/news.in';

export const transformResponse = (response: INewsArray) => {
	return {
		news: response || []
	};
};
