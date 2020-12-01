import React from 'react';
import { useProductContext } from '../productContext';
import Payment from '../components/Payment';

export default () => {
	const { product } = useProductContext();

	return (
		<div>
			<h1>Checkout</h1>
			<div>{JSON.stringify(product)}</div>
			<Payment />
		</div>
	);
};
