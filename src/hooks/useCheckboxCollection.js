import { useState } from 'react';

const useCheckboxCollection = (initialState = []) => {
	const [collection, setCollection] = useState(initialState);

	const add = (value) => {
		setCollection((state) => {
			return [...state, value];
		});
	};

	const remove = (value) => {
		setCollection((state) => {
			return state.filter((item) => item !== value);
		});
	};

	return [collection, add, remove];
};

export default useCheckboxCollection;
