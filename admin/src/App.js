import React from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = handleSubmit((data) => {
		fetch('http://localhost:3000/ingredients', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(data),
		}).then((response) => console.log(response));
	});

	return (
		<form onSubmit={onSubmit}>
			<div>
				<label htmlFor="name">
					Название ингредиента:
					<input id="name" type="text" name="name" ref={register} />
				</label>
			</div>
			<div>
				<label htmlFor="slug">
					Идентификатор ингредиента:
					<input id="slug" type="text" name="slug" ref={register} />
				</label>
			</div>
			<div>
				<label htmlFor="price">
					Цена ингредиента:
					<input
						id="price"
						type="number"
						name="price"
						ref={register}
					/>
				</label>
			</div>
			<div>
				<label htmlFor="category">
					Категория ингредиента:
					<select name="category" ref={register}>
						<option value="sauces">Соусы</option>
						<option value="cheeses">Сыры</option>
						<option value="vegetables">Овощи</option>
						<option value="meat">Мясо</option>
					</select>
				</label>
			</div>
			<div>
				<label htmlFor="image">
					Картинка ингредиента:
					<input id="image" type="file" name="image" ref={register} />
				</label>
			</div>
			<button type="submit">Добавить</button>
		</form>
	);
};

export default App;
