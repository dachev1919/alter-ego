import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	deleteLocalStorage,
	readLocalStorage,
	writeLocalStorage
} from '../../../utils/local-storage';

interface IUserStateInitial {
	auth: boolean;
}

const userStateInitial: IUserStateInitial = {
	auth: !!readLocalStorage('auth')
};

export const userStateSlice = createSlice({
	name: 'userState',
	initialState: userStateInitial,
	reducers: {
		userAuthState(state, action: PayloadAction<boolean>) {
			if (action.payload) {
				writeLocalStorage<boolean>('auth', true);
				state.auth = true;
			} else {
				deleteLocalStorage('auth');
				state.auth = false;
			}
		}
	}
});

export const { userAuthState } = userStateSlice.actions;

export default userStateSlice.reducer;
