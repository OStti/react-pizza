import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import PIZZA_DATA from '../../pizzaData';
import { createOrder } from '../../api';
import calcTotalPrice, { getObjFromData } from '../../util/calcTotalPrice';

const { SIZE, DOUGH, SAUCES, CHEESES, VEGETABLES, MEAT } = PIZZA_DATA;

const ProductBuilder = () => {
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

	const watchAllFields = watch();

	const onSubmit = handleSubmit((data) => {
		createOrder(data);
		history.push('/checkout');
	});

	useEffect(() => {
		setTotalPrice(calcTotalPrice(watchAllFields) + 200);
	}, [watchAllFields]);

	return (
		<form className="product-builder" onSubmit={onSubmit}>
			<div className="product-builder__selected">
				{getObjFromData(watchAllFields.size, 'name')}
				{getObjFromData(watchAllFields.dough, 'name')}
				{getObjFromData(watchAllFields.sauces, 'name')}
			</div>
			<div className="product-builder__categories">
				<div className="product-builder__category-row">
					<div className="product-builder__category-col">
						<h2 className="product-builder__category-title">
							Размер
						</h2>
						<div className="radio-group">
							{SIZE.map(({ id, name, slug, category }) => {
								return (
									<div key={id} className="radio-group__item">
										<label htmlFor={slug}>{name}</label>
										<input
											type="radio"
											value={slug}
											name={category}
											ref={register}
											id={slug}
										/>
									</div>
								);
							})}
						</div>
					</div>
					<div className="product-builder__category-col">
						<h2 className="product-builder__category-title">
							Тесто
						</h2>
						{DOUGH.map(({ id, name, slug, category }) => {
							return (
								<div key={id} className="radio-group__item">
									<label htmlFor={slug}>{name}</label>
									<input
										type="radio"
										value={slug}
										name={category}
										ref={register}
										id={slug}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className="product-builder__category-row">
					<div className="product-builder__category-col">
						<h2 className="product-builder__category-title">
							Выберите соус
						</h2>
						{SAUCES.map(({ id, name, slug, category }) => {
							return (
								<div key={id} className="radio-group__item">
									<label htmlFor={slug}>{name}</label>
									<input
										type="radio"
										value={slug}
										name={category}
										ref={register}
										id={slug}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className="product-builder__category-row">
					<div className="product-builder__category-col">
						<h2 className="product-builder__category-title">
							Добавьте сыр
						</h2>
						{CHEESES.map(({ id, name, slug, category }) => {
							return (
								<div key={id} className="radio-group__item">
									<label htmlFor={slug}>{name}</label>
									<input
										type="checkbox"
										value={slug}
										name={category}
										ref={register}
										id={slug}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className="product-builder__category-row">
					<div className="product-builder__category-col">
						<h2 className="product-builder__category-title">
							Добавьте овощи
						</h2>
						{VEGETABLES.map(({ id, name, slug, category }) => {
							return (
								<div key={id} className="radio-group__item">
									<label htmlFor={slug}>{name}</label>
									<input
										type="checkbox"
										value={slug}
										name={category}
										ref={register}
										id={slug}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className="product-builder__category-row">
					<div className="product-builder__category-col">
						<h2 className="product-builder__category-title">
							Добавьте мясо
						</h2>
						{MEAT.map(({ id, name, slug, category }) => {
							return (
								<div key={id} className="radio-group__item">
									<label htmlFor={slug}>{name}</label>
									<input
										type="checkbox"
										value={slug}
										name={category}
										ref={register}
										id={slug}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<footer className="product-builder__footer">
				<Button type="submit">Заказать за {totalPrice}p</Button>
			</footer>
		</form>
	);
};

export default ProductBuilder;
