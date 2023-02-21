import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	readLocalStorage,
	writeLocalStorage
} from '../../../../utils/local-storage';
import i18n from 'i18next';

interface ILangSliceInitial {
	lang: string | undefined;
}
const userStateInitial: ILangSliceInitial = {
	lang: !!readLocalStorage<string>('lang')
		? readLocalStorage<string>('lang')
		: 'uk'
};

export const langSlice = createSlice({
	name: 'langSlice',
	initialState: userStateInitial,
	reducers: {
		setLang(state, action: PayloadAction<string>) {
			const lang = action.payload;
			state.lang = lang;

			i18n.changeLanguage(lang);
			writeLocalStorage<string>('lang', lang);
		}
	}
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;
