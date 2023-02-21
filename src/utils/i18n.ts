import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: 'ua',
		interpolation: {
			escapeValue: false
		},
		resources: {
			ua: {
				translation: {
					greeting: {
						home: 'Ласкаво просимо на головну сторінку :)'
					},
					newsPage: {
						loadingDataError: 'Щось пішло не так, спробуйте пізніше.',
						dataLoading: 'Дані завантажуються...',
						sectionTitle: 'Новини'
					},
					signInPage: {
						sectionTitle: 'Авторизація',
						usernameInputLabel: "Ім'я користувача",
						passwordInputLabel: 'Пароль',
						validationError: "Ім'я користувача або пароль введено неправильно.",
						signInButton: 'Увійти'
					},
					profile: {
						sectionTitle: 'Профіль',
						usernameInputLabel: "Нове ім'я користувача",
						passwordInputLabel: 'Новий пароль',
						saveChangesButton: 'Змінити інформацію'
					},
					header: {
						headerLink1: 'Новини',
						headerProfileLink1: 'Профіль',
						headerProfileLink2: 'Вийти',
						headerProfileLink3: 'Увійти'
					},
					footer: {
						developedBy: 'Розробив Олег Дачев',
						footerLink1: 'Головна',
						footerLink2: 'Новини',
						footerLink3: 'Профіль'
					}
				}
			},
			en: {
				translation: {
					greeting: {
						home: 'Welcome to the main page :)'
					},
					newsPage: {
						loadingDataError: 'Something went wrong, try again later.',
						dataLoading: 'The data is loaded...',
						sectionTitle: 'News'
					},
					signInPage: {
						sectionTitle: 'Authorization',
						usernameInputLabel: 'User name',
						passwordInputLabel: 'Password',
						validationError: 'The username or password is incorrect.',
						signInButton: 'Sign in'
					},
					profile: {
						sectionTitle: 'Profile',
						usernameInputLabel: 'New user name',
						passwordInputLabel: 'New password',
						saveChangesButton: 'Change information'
					},
					header: {
						headerLink1: 'News',
						headerProfileLink1: 'Profile',
						headerProfileLink2: 'Logout',
						headerProfileLink3: 'Sign in'
					},
					footer: {
						developedBy: 'Developed by Oleh Dachev',
						footerLink1: 'Home',
						footerLink2: 'News',
						footerLink3: 'Profile'
					}
				}
			}
		}
	});

export default i18n;
