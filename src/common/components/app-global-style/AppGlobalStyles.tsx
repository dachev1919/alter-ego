import React, { FC } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';

const AppGlobalStyles: FC = () => {
	return (
		<>
			<GlobalStyles
				styles={{
					a: { textDecoration: 'none' },
					li: { listStyle: 'none' }
				}}
			/>
		</>
	);
};

export default AppGlobalStyles;
