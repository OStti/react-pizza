import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
	return (
		<>
			<form>
				Reg
				<button type="submit">Зарегистрироваться</button>
			</form>
			<Link to="/login">Логин</Link>
		</>
	);
};
