export const calcPrice = (data, state) => {
	return data.reduce((acc, { value, price }) => {
		return state.includes(value) && price ? acc + price : acc;
	}, 0);
};

export const getTotalPrice = (data) =>
	data.reduce((acc, item) => acc + calcPrice(item[0], item[1]), 200);
