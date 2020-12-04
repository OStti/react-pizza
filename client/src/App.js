import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductBuilder from './components/ProductBuilder';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import OrderListPage from './pages/OrderListPage';
import OrderPage from './pages/OrderPage';
import RegistrationPage from './pages/RegistrationPage';
import TopingsListPage from './pages/TopingsListPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
	return (
		<Switch>
			<Route exact path="/">
				<ProductBuilder />
			</Route>
			<Route path="/checkout">
				<CheckoutPage />
			</Route>
			<Route path="/login">
				<LoginPage />
			</Route>
			<Route path="/order-list">
				<OrderListPage />
			</Route>
			<Route path="/order">
				<OrderPage />
			</Route>
			<Route path="/registration">
				<RegistrationPage />
			</Route>
			<Route path="/topings-list">
				<TopingsListPage />
			</Route>
			<Route>
				<NotFoundPage />
			</Route>
		</Switch>
	);
};

export default App;
