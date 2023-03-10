// const data = readLocalStorage<MyData>('myData');
export const readLocalStorage = <T>(key: string): T | undefined => {
	const item = localStorage.getItem(key);

	if (item) {
		try {
			return JSON.parse(item) as T;
		} catch (error) {
			console.error(`Error parsing item from localstorage: ${error}`);

			return undefined;
		}
	}

	return undefined;
};

// writeLocalStorage<MyData>('myData', data);
export const writeLocalStorage = <T>(key: string, data: T): void => {
	try {
		localStorage.setItem(key, JSON.stringify(data));
	} catch (error) {
		console.error(`Error writing item to localStorage: ${error}`);
	}
};

// deleteLocalStorage('myData');
export const deleteLocalStorage = (key: string): void => {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		console.error(`Error deleting item from localStorage: ${error}`);
	}
};
