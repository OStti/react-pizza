import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<input
					type="text"
					name="login"
					ref={register}
					placeholder="Введите логин..."
				/>
			</div>
			<div>
				<input
					type="password"
					name="password"
					ref={register}
					placeholder="Введите пароль..."
				/>
			</div>
			<div>
				<button type="submit">Зарегистрироваться</button>
			</div>
			<Link to="/login">Войти</Link>
		</form>
	);
};
