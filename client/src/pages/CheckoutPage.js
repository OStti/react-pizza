import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Typography,
  Grid,
  TextField,
  Container,
  Card,
  CardContent,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import getTotalPrice from '../utils/getTotalPrice';
import ERRORS from '../errorsMessages';
import { fetchOrder } from '../slices/order';

import PizzaCard from '../components/PizzaCard';

const schema = yup.object().shape({
  adress: yup.string().required(ERRORS.required),
  entrance: yup.string().required(ERRORS.required),
  floor: yup.string().required(ERRORS.required),
  apartment: yup.string().required(ERRORS.required),
  cardNumber: yup.string().required(ERRORS.required),
  cardMonth: yup.string().required(ERRORS.required),
  cardCvv: yup.string().required(ERRORS.required),
  cardName: yup.string().required(ERRORS.required),
});

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const pizza = useSelector((state) => state.pizza);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(fetchOrder(data));
    history.push('/order');
  };

  return (
    <Container disableGutters>
      <Typography component="h2" variant="h4" gutterBottom>
        Оформление заказа
      </Typography>

      <Box marginBottom={2}>
        <PizzaCard data={pizza} />
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box marginBottom={2}>
          <Card>
            <CardContent>
              <Typography component="h2" variant="h6" gutterBottom>
                Адрес доставки
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="adress"
                    label="Адрес"
                    variant="outlined"
                    inputRef={register}
                    fullWidth
                    autoFocus
                    error={errors.adress}
                    helperText={errors.adress && errors.adress.message}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    type="text"
                    name="entrance"
                    label="Подъезд"
                    variant="outlined"
                    inputRef={register}
                    fullWidth
                    error={errors.entrance}
                    helperText={errors.entrance && errors.entrance.message}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    type="text"
                    name="floor"
                    label="Этаж"
                    variant="outlined"
                    inputRef={register}
                    fullWidth
                    error={errors.floor}
                    helperText={errors.floor && errors.floor.message}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    type="text"
                    name="apartment"
                    label="Квартира"
                    variant="outlined"
                    inputRef={register}
                    fullWidth
                    error={errors.apartment}
                    helperText={errors.apartment && errors.apartment.message}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Box marginBottom={2}>
          <Card>
            <CardContent>
              <Typography component="h2" variant="h6" gutterBottom>
                Данные для отправки
              </Typography>
              <Grid container spacing={2} justify="space-between">
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="cardNumber"
                    variant="outlined"
                    inputRef={register}
                    fullWidth
                    placeholder="Номер карты"
                    error={errors.cardNumber}
                    helperText={errors.cardNumber && errors.cardNumber.message}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    type="text"
                    name="cardMonth"
                    variant="outlined"
                    inputRef={register}
                    fullWidth
                    placeholder="MM/YYYY"
                    error={errors.cardMonth}
                    helperText={errors.cardMonth && errors.cardMonth.message}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    type="text"
                    name="cardCvv"
                    variant="outlined"
                    inputRef={register}
                    fullWidth
                    placeholder="CVV"
                    error={errors.cardCvv}
                    helperText={errors.cardCvv && errors.cardCvv.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="cardName"
                    variant="outlined"
                    inputRef={register}
                    fullWidth
                    placeholder="Имя как на карте"
                    error={errors.cardName}
                    helperText={errors.cardName && errors.cardName.message}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Card>
          <CardContent>
            <List dense="true">
              <ListItem disableGutters>
                <ListItemText>
                  Стоимость заказа: {getTotalPrice(pizza) + 200}
                </ListItemText>
              </ListItem>
              <ListItem disableGutters divider>
                <ListItemText>Стоимость доставки: 200</ListItemText>
              </ListItem>
            </List>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h5">
                Итого: {getTotalPrice(pizza) + 400}
              </Typography>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Оплатить
              </Button>
            </Box>
          </CardContent>
        </Card>
      </form>
    </Container>
  );
};
