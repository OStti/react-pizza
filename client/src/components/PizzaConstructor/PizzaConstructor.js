import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Grid,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CheckboxIngredient from '../CheckboxIngredient';
import PIZZA_DATA from '../../pizzaData';
import { getStringValue, getArrayValues } from '../../utils/getValues';
import getTotalPrice from '../../utils/getTotalPrice';
import { addPizza } from '../../slices/pizza';

import {
  Constructor,
  PizzaImage,
  ComboIngredients,
  SideBar,
} from './styledComponents';
import RadioItem from '../RadioItem/RadioItem';

const { SIZE, DOUGH, SAUCES, CHEESES, VEGETABLES, MEAT } = PIZZA_DATA;

const PizzaConstructor = () => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

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

  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const onSubmit = handleSubmit((data) => {
    dispatch(addPizza(data));
    history.push('/checkout');
  });

  const getPrice = () => getTotalPrice(watchAllFields) + 200;

  return (
    <Constructor className="pizza-constructor" onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} xl={9}>
          <Typography component="h2" variant="h5" gutterBottom>
            Выберите ингредиенты
          </Typography>
          <Box marginBottom={4}>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>Размер</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {SIZE.map(({ id, ...rest }) => {
                    return (
                      <Grid item xs={12} sm={6} key={id}>
                        <RadioItem data={rest} ref={register} />
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography>Тесто</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {DOUGH.map(({ id, ...rest }) => {
                    return (
                      <Grid item xs={12} sm={6} key={id}>
                        <RadioItem data={rest} ref={register} />
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography>Выберите соус</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {SAUCES.map(({ id, ...rest }) => {
                    return (
                      <Grid item xs={12} sm={6} key={id}>
                        <RadioItem data={rest} ref={register} />
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography>Добавьте сыр</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {CHEESES.map(({ id, ...rest }) => {
                    return (
                      <Grid item xs={12} sm={2} key={id}>
                        <CheckboxIngredient
                          data={rest}
                          ref={register}
                          watchField={watchAllFields.cheeses}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel5'}
              onChange={handleChange('panel5')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
              >
                <Typography>Добавьте овощи</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {VEGETABLES.map(({ id, ...rest }) => {
                    return (
                      <Grid item xs={12} sm={2} key={id}>
                        <CheckboxIngredient
                          data={rest}
                          ref={register}
                          watchField={watchAllFields.vegetables}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel6'}
              onChange={handleChange('panel6')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6bh-content"
                id="panel6bh-header"
              >
                <Typography>Добавьте мясо</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {MEAT.map(({ id, ...rest }) => {
                    return (
                      <Grid item xs={12} sm={2} key={id}>
                        <CheckboxIngredient
                          data={rest}
                          ref={register}
                          watchField={watchAllFields.meat}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>

        <Grid item xs={12} xl={3}>
          <SideBar>
            <Typography component="h2" variant="h5" gutterBottom>
              Своя пицца
            </Typography>
            <Card>
              <CardContent>
                <PizzaImage>
                  <img
                    src={`/assets/dough/${watchAllFields.dough}.png`}
                    alt="Dough"
                  />

                  {watchAllFields.cheeses &&
                    watchAllFields.cheeses.length > 1 !== 0 &&
                    watchAllFields.cheeses.map((item) => {
                      return (
                        <ComboIngredients
                          key={item}
                          src={`/assets/cheeses/${item}.png`}
                          alt="Cheeses"
                        />
                      );
                    })}

                  {watchAllFields.vegetables &&
                    watchAllFields.vegetables.length > 1 &&
                    watchAllFields.vegetables.map((item) => {
                      return (
                        <ComboIngredients
                          key={item}
                          src={`/assets/vegs/${item}.png`}
                          alt="Vegetables"
                        />
                      );
                    })}

                  {watchAllFields.meat &&
                    watchAllFields.meat.length > 1 &&
                    watchAllFields.meat.map((item) => {
                      return (
                        <ComboIngredients
                          key={item}
                          src={`/assets/meat/${item}.png`}
                          alt="Meat"
                        />
                      );
                    })}
                </PizzaImage>

                <List dense="true">
                  <ListItem disableGutters>
                    <ListItemText
                      primary={`Размер пиццы: ${getStringValue(
                        SIZE,
                        watchAllFields.size
                      )}`}
                    />
                  </ListItem>
                  {watchAllFields.dough && (
                    <ListItem disableGutters>
                      <ListItemText
                        primary={`Тесто: ${getStringValue(
                          DOUGH,
                          watchAllFields.dough
                        )}`}
                      />
                    </ListItem>
                  )}

                  {watchAllFields.sauces && (
                    <ListItem disableGutters>
                      <ListItemText
                        primary={`Соус: ${getStringValue(
                          SAUCES,
                          watchAllFields.sauces
                        )}`}
                      />
                    </ListItem>
                  )}

                  {watchAllFields.cheeses && watchAllFields.cheeses.length > 1 && (
                    <ListItem disableGutters>
                      <ListItemText
                        primary={`Сыр: ${getArrayValues(
                          CHEESES,
                          watchAllFields.cheeses
                        )}`}
                      />
                    </ListItem>
                  )}
                  {watchAllFields.vegetables &&
                    watchAllFields.vegetables.length > 1 && (
                      <ListItem disableGutters>
                        <ListItemText
                          primary={`Овощи/Фрукты: ${getArrayValues(
                            VEGETABLES,
                            watchAllFields.vegetables
                          )}`}
                        />
                      </ListItem>
                    )}
                  {watchAllFields.meat && watchAllFields.meat.length > 1 && (
                    <ListItem disableGutters>
                      <ListItemText
                        primary={`Мясо: ${getArrayValues(
                          MEAT,
                          watchAllFields.meat
                        )}`}
                      />
                    </ListItem>
                  )}
                </List>
                <Typography component="div" align="center" variant="h6">
                  Итого: {getPrice()}р
                </Typography>
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Заказать <ShoppingCartIcon fontSize="small" />
                </Button>
              </CardContent>
            </Card>
          </SideBar>
        </Grid>
      </Grid>
    </Constructor>
  );
};

export default PizzaConstructor;
