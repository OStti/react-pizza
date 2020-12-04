import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getByEndPoint, deleteIngredient } from '../api';

export default () => {
	const [toppings, setToppings] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const handleDelete = async (id) => {
		const res = await deleteIngredient(id);
		console.log(res);
	};

	useEffect(() => {
		const getIngredients = async () => {
			const res = await getByEndPoint('/ingredients');
			console.log(res);

			setToppings(res);
			setIsLoading(false);
		};

		getIngredients();
	}, []);

	if (isLoading) {
		return <div>Загружаем топинги...</div>;
	}

	return (
		<div>
			<h1>Toppings List</h1>
			<table>
				<thead>
					<tr>
						<th> </th>
						<th>Название</th>
						<th>Идентификатор</th>
						<th>Цена</th>
						<th>Категория</th>
						<th>Картинка</th>
					</tr>
				</thead>
				<tbody>
					{toppings.map(({ name, slug, price, category, image }) => {
						return (
							<tr key={uuidv4()}>
								<td>
									<button type="button">редактировать</button>
									<button
										type="button"
										onClick={() => handleDelete(slug)}
									>
										удалить
									</button>
								</td>
								<td>{name}</td>
								<td>{slug}</td>
								<td>{price}</td>
								<td>{category}</td>
								<td>{image}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
