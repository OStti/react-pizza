import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductCategory from '../ProductCategory';
import RadioGroup from '../RadioGroup';
import CheckboxGroup from '../CheckboxGroup';
import Button from '../Button';
import useCheckboxCollection from '../../hooks/useCheckboxCollection';
import { getTotalPrice } from '../../utils/calcPrice';
import { useProductContext } from '../../productContext';
import DATA from '../../data';

const ProductBuilder = () => {
	const history = useHistory();

	const { setProduct } = useProductContext();

	const [size, setSize] = useState('30см');
	const [dough, setDought] = useState('Тонкое');
	const [sauces, setSauces] = useState('Томатный');
	const [cheeses, addCheeses, removeCheeses] = useCheckboxCollection([]);
	const [vegetables, addVegetables, removeVegetables] = useCheckboxCollection(
		[]
	);
	const [meat, addMeat, removeMeat] = useCheckboxCollection([]);
	const [totalPrice, setTotalPrice] = useState(200);

	const sizeHandler = ({ target: { value } }) => setSize(value);
	const doughHandler = ({ target: { value } }) => setDought(value);
	const saucesHandler = ({ target: { value } }) => setSauces(value);
	const cheesesHandler = ({ target: { value } }) => {
		if (cheeses.includes(value)) {
			removeCheeses(value);
		} else {
			addCheeses(value);
		}
	};
	const vegetablesHandler = ({ target: { value } }) => {
		if (vegetables.includes(value)) {
			removeVegetables(value);
		} else {
			addVegetables(value);
		}
	};
	const meatHandler = ({ target: { value } }) => {
		if (meat.includes(value)) {
			removeMeat(value);
		} else {
			addMeat(value);
		}
	};
	const submitHandler = (e) => {
		e.preventDefault();

		setProduct({
			size,
			dought: dough,
			sauces,
			cheeses,
			vegetables,
			meat,
			totalPrice,
		});

		history.push('/checkout');
	};

	useEffect(() => {
		const total = getTotalPrice([
			[DATA.size, size],
			[DATA.dough, dough],
			[DATA.sauces, sauces],
			[DATA.cheeses, cheeses],
			[DATA.vegetables, vegetables],
			[DATA.meat, meat],
		]);

		setTotalPrice(total);
	});

	return (
		<form className="product-builder" onSubmit={submitHandler}>
			<div className="product-builder__selected">
				<div>{`${size} на ${dough} тесте`}</div>
				<div>{`${sauces} соус ${cheeses}${vegetables}${meat}`}</div>
			</div>
			<div className="product-builder__categories">
				<div className="product-builder__categoty-row">
					<div className="product-builder__categoty-col">
						<ProductCategory title="Размер">
							<RadioGroup
								items={DATA.size}
								selectedItems={size}
								groupName="size"
								radioGroupHandler={sizeHandler}
							/>
						</ProductCategory>
					</div>
					<div className="product-builder__categoty-col">
						<ProductCategory title="Тесто">
							<RadioGroup
								items={DATA.dough}
								selectedItems={dough}
								groupName="dought"
								radioGroupHandler={doughHandler}
							/>
						</ProductCategory>
					</div>
				</div>
				<div className="product-builder__categoty-row">
					<div className="product-builder__categoty-col">
						<ProductCategory title="Выберите соус">
							<RadioGroup
								items={DATA.sauces}
								selectedItems={sauces}
								groupName="sauces"
								radioGroupHandler={saucesHandler}
							/>
						</ProductCategory>
					</div>
				</div>
				<div className="product-builder__categoty-row">
					<div className="product-builder__categoty-col">
						<ProductCategory title="Добавьте сыр">
							<CheckboxGroup
								items={DATA.cheeses}
								selectedItems={cheeses}
								checkboxGroupHandler={cheesesHandler}
							/>
						</ProductCategory>
					</div>
				</div>
				<div className="product-builder__categoty-row">
					<div className="product-builder__categoty-col">
						<ProductCategory title="Добавьте овощи">
							<CheckboxGroup
								items={DATA.vegetables}
								selectedItems={vegetables}
								checkboxGroupHandler={vegetablesHandler}
							/>
						</ProductCategory>
					</div>
				</div>
				<div className="product-builder__categoty-row">
					<div className="product-builder__categoty-col">
						<ProductCategory title="Добавьте мясо">
							<CheckboxGroup
								items={DATA.meat}
								selectedItems={meat}
								checkboxGroupHandler={meatHandler}
							/>
						</ProductCategory>
					</div>
				</div>
			</div>
			<footer className="product-builder__footer">
				<Button type="submit">Заказать за {String(totalPrice)}р</Button>
			</footer>
		</form>
	);
};

export default ProductBuilder;
