import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import RadioGroup from '../RadioGroup';
import CheckboxGroup from '../CheckboxGroup';
import Button from '../Button';
import { useProductContext } from '../../productContext';

const DATA = {
	size: [
		{
			id: 1,
			label: '30см',
			value: 'small',
		},
		{
			id: 2,
			label: '50см',
			value: 'big',
			price: 50,
		},
	],
	dough: [
		{
			id: 1,
			label: 'Тонкое',
			value: 'thin',
		},
		{
			id: 2,
			label: 'Пышное',
			value: 'lush',
		},
	],
	sauces: [
		{
			id: 1,
			label: 'Белый',
			value: 'white',
		},
		{
			id: 2,
			label: 'Томатный',
			value: 'tomato',
		},
		{
			id: 3,
			label: 'Острый',
			value: 'hot',
		},
	],
	cheeses: [
		{
			id: 1,
			label: 'Моцарелла',
			value: 'mozzarella',
			price: 29,
		},
		{
			id: 2,
			label: 'Чеддер',
			value: 'cheddar',
			price: 29,
		},
		{
			id: 3,
			label: 'Дор Блю',
			value: 'dorBlue',
			price: 29,
		},
	],
	vegetables: [
		{
			id: 1,
			label: 'Помидоры',
			value: 'tomato',
			price: 29,
		},
		{
			id: 2,
			label: 'Грибы',
			value: 'mushrooms',
			price: 29,
		},
		{
			id: 3,
			label: 'Перец',
			value: 'pepper',
			price: 29,
		},
	],
	meat: [
		{
			id: 1,
			label: 'Бекон',
			value: 'bacon',
			price: 29,
		},
		{
			id: 2,
			label: 'Пеперонни',
			value: 'pepperoni',
			price: 29,
		},
		{
			id: 3,
			label: 'Ветчина',
			value: 'ham',
			price: 29,
		},
	],
};

const ProductBuilder = () => {
	const history = useHistory();
	const { setProduct } = useProductContext();

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

	const [totalProductPrice, setTotalProductPrice] = useState(0);

	const onSubmit = (data) => {
		setProduct(data);
		history.push('/checkout');
	};

	const getModifiedSelectedItem = (key, watchField) => {
		if (typeof watchField === 'string' && watchField) {
			return DATA[key].find((item) => item.value === watchField).label;
		}

		if (watchField.length) {
			return watchField.map((watchFieldValue) => {
				return DATA[key].find(({ value }) => value === watchFieldValue)
					.label;
			});
		}

		return null;
	};

	useEffect(() => {
		const entries = Object.entries(watchAllFields);

		const total = entries.reduce((totalPrice, [entryKey, entryValue]) => {
			if (typeof entryValue === 'string') {
				const foundValue = DATA[entryKey].filter(
					({ value, price }) => value && price && value === entryValue
				);

				return foundValue.length
					? totalPrice + foundValue[0].price
					: totalPrice;
			}

			const totalPriceFromList = entryValue.reduce(
				(totalListPrice, listValue) => {
					const foundValue = DATA[entryKey].filter(
						({ value, price }) =>
							value && price && value === listValue
					);

					return foundValue
						? totalListPrice + foundValue[0].price
						: totalListPrice;
				},
				0
			);

			return totalPriceFromList + totalPrice;
		}, 200);

		setTotalProductPrice(total);
	});

	return (
		<form className="product-builder" onSubmit={handleSubmit(onSubmit)}>
			<div className="product-builder__selected">
				{getModifiedSelectedItem('size', watchAllFields.size)}
				{getModifiedSelectedItem('dough', watchAllFields.dough)}
				{getModifiedSelectedItem('sauces', watchAllFields.sauces)}
				{getModifiedSelectedItem('cheeses', watchAllFields.cheeses)}
				{getModifiedSelectedItem(
					'vegetables',
					watchAllFields.vegetables
				)}
				{getModifiedSelectedItem('meat', watchAllFields.meat)}
			</div>
			<div className="product-builder__categories">
				<div className="product-builder__category-row">
					<div className="product-builder__category-col">
						<h2 className="product-builder__category-title">
							Размер
						</h2>
						<RadioGroup
							items={DATA.size}
							groupName="size"
							register={register}
						/>
					</div>
					<div className="product-builder__category-col">
						<h2 className="product-builder__category-title">
							Тесто
						</h2>
						<RadioGroup
							items={DATA.dough}
							groupName="dough"
							register={register}
						/>
					</div>
				</div>
				<div className="product-builder__category-row">
					<div className="product-builder__category-col">
						<h2 className="product-builder__category-title">
							Выберите соус
						</h2>
						<RadioGroup
							items={DATA.sauces}
							groupName="sauces"
							register={register}
						/>
					</div>
				</div>
				<div className="product-builder__category-row">
					<div className="product-builder__category-col">
						<h2 className="product-builder__category-title">
							Добавьте сыр
						</h2>
						<CheckboxGroup
							items={DATA.cheeses}
							groupName="cheeses"
							register={register}
						/>
					</div>
				</div>
				<div className="product-builder__category-row">
					<div className="product-builder__category-col">
						<h2 className="product-builder__category-title">
							Добавьте овощи
						</h2>
						<CheckboxGroup
							items={DATA.vegetables}
							groupName="vegetables"
							register={register}
						/>
					</div>
				</div>
				<div className="product-builder__category-row">
					<div className="product-builder__category-col">
						<h2 className="product-builder__category-title">
							Добавьте мясо
						</h2>
						<CheckboxGroup
							items={DATA.meat}
							groupName="meat"
							register={register}
						/>
					</div>
				</div>
			</div>
			<footer className="product-builder__footer">
				<Button type="submit">Заказать за {totalProductPrice}p</Button>
			</footer>
		</form>
	);
};

export default ProductBuilder;
