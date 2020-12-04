import PIZZA_DATA from '../pizzaData';

const getMergedData = (data) => {
	const result = [];
	const values = Object.values(data);

	values.forEach((arr) => arr.forEach((obj) => result.push(obj)));

	return result;
};

export const getObjFromData = (value, key) => {
	const item = getMergedData(PIZZA_DATA).find(({ slug }) => slug === value);

	return key ? item[key] : item;
};

const getCurrentPrices = (watchFields) => {
	const values = Object.values(watchFields);

	return values.map((item) => {
		if (typeof item === 'string') {
			const { price } = getObjFromData(item);

			return price !== undefined ? price : 0;
		}

		return item.reduce((acc, value) => {
			const { price } = getObjFromData(value);

			return price !== undefined ? acc + price : acc;
		}, 0);
	});
};

export default (watchFields) => {
	return getCurrentPrices(watchFields).reduce((acc, value) => acc + value, 0);
};
