import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface CustomTheme {
		custom?: {
			black?: string;
			background?: string;
			'gray-line'?: string;
			'gray-200'?: string;
			'gray-300'?: string;
			'gray-400'?: string;
			red?: string;
		};
	}

	interface Theme extends CustomTheme {}
	interface ThemeOptions extends CustomTheme {}
}

export const theme = createTheme({
	custom: {
		black: '#171923',
		background: '#fff',
		'gray-line': '#f6f6f6',
		'gray-200': '#a6a6a6',
		'gray-300': '#858585',
		'gray-400': '#555',
		red: '#F71414'
	}
});
