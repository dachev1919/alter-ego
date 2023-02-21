import React, { FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Section from '../../../common/components/section/Section';
import TextField from '@mui/material/TextField';
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import i18next from 'i18next';

const Profile: FC = () => {
	const { auth: isAuth } = useSelector((state: RootState) => state.userState);
	const [showPassword, setShowPassword] = useState<boolean>(false);

	if (!isAuth) {
		return <Navigate to='/alter-ego' />;
	}
	const handleClickShowPassword = () => setShowPassword(show => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const formSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<Section title={i18next.t('profile.sectionTitle')}>
			<form className='global-form' onSubmit={formSubmitHandler}>
				<TextField
					id='outlined-basic'
					label={i18next.t('profile.usernameInputLabel')}
					variant='outlined'
				/>
				<FormControl variant='outlined'>
					<InputLabel htmlFor='outlined-adornment-password'>
						{i18next.t('profile.passwordInputLabel')}
					</InputLabel>
					<OutlinedInput
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
						label={i18next.t('profile.passwordInputLabel')}
					/>
				</FormControl>

				<Button variant='contained' type='submit'>
					{i18next.t('profile.saveChangesButton')}
				</Button>
			</form>
		</Section>
	);
};

export default Profile;
