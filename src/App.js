import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductBuilder from './components/ProductBuilder';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import OrderListPage from './pages/OrderListPage';
import OrderingPage from './pages/OrderingPage';
import RegistrationPage from './pages/RegistrationPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
	return (
		// Routes
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
			<Route path="/ordering">
				<OrderingPage />
			</Route>
			<Route path="/registration">
				<RegistrationPage />
			</Route>
			<Route>
				<NotFoundPage />
			</Route>
		</Switch>
	);
};

export default App;
