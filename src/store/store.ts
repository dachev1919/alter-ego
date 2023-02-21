import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { newsApi } from '../modules/news/api/repository';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userStateSlice from '../modules/auth/api/user-state';
import langSlice from '../common/components/header/api/lang-slice';

const rootReducers = combineReducers({
	userState: userStateSlice,
	langSlice: langSlice,
	[newsApi.reducerPath]: newsApi.reducer
});

export const store = configureStore({
	reducer: rootReducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(newsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
