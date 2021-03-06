import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import AppBar from './components/AppBar';
import PizzaConstructor from './components/PizzaConstructor';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import OrderListPage from './pages/OrderListPage';
import OrderPage from './pages/OrderPage';
import RegistrationPage from './pages/RegistrationPage';
import IngredientsPage from './pages/IngredientsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="xl">
        <Switch>
          <Route exact path="/">
            <PizzaConstructor />
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
          <Route path="/ingredients">
            <IngredientsPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default App;
