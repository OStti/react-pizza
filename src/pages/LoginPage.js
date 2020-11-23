import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
	return (
		<>
			<form>
				<button type="submit">Войти</button>
			</form>
			<Link to="/registration">Зарегистрироваться</Link>
		</>
	);
};
