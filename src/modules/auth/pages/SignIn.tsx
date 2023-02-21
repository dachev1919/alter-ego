import React, { FC, useState } from 'react';
import Section from '../../../common/components/section/Section';
import TextField from '@mui/material/TextField';
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Typography
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { userAuthState } from '../api/user-state';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Navigate } from 'react-router-dom';
import i18next from 'i18next';

const SignIn: FC = () => {
	const { auth: isAuth } = useSelector((state: RootState) => state.userState);
	const dispatch = useDispatch();
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [validation, setValidation] = useState<boolean>(true);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		if (username === 'admin' && password === '12345') {
			dispatch(userAuthState(true));
		} else {
			setValidation(false);
		}
	};

	const handleClickShowPassword = () => setShowPassword(show => !show);

	const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};

	if (isAuth) {
		return <Navigate to='/alter-ego/profile' />;
	}

	return (
		<Section title={i18next.t('signInPage.sectionTitle')}>
			<form className='global-form' onSubmit={submitHandler}>
				<TextField
					onChange={e => setUsername(e.target.value)}
					id='outlined-basic'
					label={i18next.t('signInPage.usernameInputLabel')}
					variant='outlined'
					required
				/>
				<FormControl variant='outlined' required>
					<InputLabel htmlFor='outlined-adornment-password'>
						{i18next.t('signInPage.passwordInputLabel')}
					</InputLabel>
					<OutlinedInput
						onChange={e => setPassword(e.target.value)}
						id='outlined-adornment-password'
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label={i18next.t('signInPage.passwordInputLabel')}
					/>
				</FormControl>
				{!validation && (
					<Typography color='red' component='p'>
						{i18next.t('signInPage.validationError')}
					</Typography>
				)}
				<Button variant='contained' type='submit'>
					{i18next.t('signInPage.signInButton')}
				</Button>
			</form>
		</Section>
	);
};

export default SignIn;
