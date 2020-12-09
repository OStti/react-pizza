import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import PIZZA_DATA from '../../pizzaData';
import { createOrder } from '../../api';
import FoodCategory from '../FoodCategory';
import IngredientsGroup from '../IngredientsGroup';
import getTotalPrice from '../../utils/getTotalPrice';

const { SIZE, DOUGH, SAUCES, CHEESES, VEGETABLES, MEAT } = PIZZA_DATA;

const PizzaConstructor = () => {
	const history = useHistory();

	const [totalPrice, setTotalPrice] = useState(0);

	const { register, handleSubmit, watch } = useForm({
		defaultValues: {
			size: 'small',
			dough: 'thin',
			sauces: 'white',
			cheeses: [],
			vegetables: [],
			meat: [],
		},
	});

	const onSubmit = handleSubmit((data) => {
		createOrder(data);
		history.push('/checkout');
	});

	useEffect(() => {
		setTotalPrice(getTotalPrice(watch()) + 200);
	}, [watch()]);

	return (
		<form className="pizza-constructor" onSubmit={onSubmit}>
			<div className="pizza-constructor__selected">Selected</div>
			<div className="pizza-constructor__food-categories">
				<FoodCategory title="Размер">
					<IngredientsGroup
						items={SIZE}
						ref={register}
						type="radio"
					/>
				</FoodCategory>
				<FoodCategory title="Тесто">
					<IngredientsGroup
						items={DOUGH}
						ref={register}
						type="radio"
					/>
				</FoodCategory>
				<FoodCategory title="Выберите соус">
					<IngredientsGroup
						items={SAUCES}
						ref={register}
						type="radio"
					/>
				</FoodCategory>
				<FoodCategory title="Добавьте сыр">
					<IngredientsGroup
						items={CHEESES}
						ref={register}
						type="checkbox"
					/>
				</FoodCategory>
				<FoodCategory title="Добавьте овощи">
					<IngredientsGroup
						items={VEGETABLES}
						ref={register}
						type="checkbox"
					/>
				</FoodCategory>
				<FoodCategory title="Добавьте мясо">
					<IngredientsGroup
						items={MEAT}
						ref={register}
						type="checkbox"
					/>
				</FoodCategory>
			</div>
			<footer className="pizza-constructor__footer">
				<Button type="submit">Заказать за {totalPrice}p</Button>
			</footer>
		</form>
	);
};

export default PizzaConstructor;
