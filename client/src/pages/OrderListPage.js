import React, { useEffect } from 'react';
import { getByEndPoint } from '../api';

export default () => {
	useEffect(() => {
		const getOrders = async () => {
			const res = await getByEndPoint('/orders');
			console.log(res);
		};

		getOrders();
	}, []);
	return (
		<div>
			<h1>Order List</h1>
		</div>
	);
};
