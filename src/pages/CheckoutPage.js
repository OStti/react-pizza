import React from 'react';

import { useProductContext } from '../productContext';

export default () => {
	const { product } = useProductContext();
	return (
		<div>
			<h1>Checkout</h1>
			<div>{JSON.stringify(product)}</div>
		</div>
	);
};
