import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import { useProductContext } from '../../productContext';
import PIZZA_DATA from '../../pizzaData';

const { SIZE, DOUGH, SAUCES, CHEESES, VEGETABLES, MEAT } = PIZZA_DATA;

const ProductBuilder = () => {
	const history = useHistory();
	const { setProduct } = useProductContext();

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

	const onSubmit = (data) => {
		setProduct(data);
		history.push('/checkout');
	};

	const getMergedData = (data) => {
		const result = [];
		const values = Object.values(data);

		values.forEach((arr) => arr.forEach((obj) => result.push(obj)));

		return result;
	};

	const getObjFromData = (value, key) => {
		const item = getMergedData(PIZZA_DATA).find(
			({ slug }) => slug === value
		);

		return key ? item[key] : item;
	};

	const getCurrentPrices = () => {
		const values = Object.values(watchAllFields);

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

	const getTotalPrice = () => {
		return getCurrentPrices().reduce((acc, value) => acc + value, 0);
	};

	useEffect(() => {
		setTotalPrice(getTotalPrice() + 200);
	}, [watchAllFields]);

	return (
		<form className="product-builder" onSubmit={handleSubmit(onSubmit)}>
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
