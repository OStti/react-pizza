import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, Card, CardContent, Divider, Box } from '@material-ui/core';
import { getStringValue, getArrayValues } from '../../utils/getValues';
import getTotalPrice from '../../utils/getTotalPrice';

import DATA from '../../pizzaData';

const StyledCard = styled(Card)`
  text-align: left;
`;

const PizzaCard = ({ data }) => {
  const viewSize = getStringValue(DATA.SIZE, data.size);
  const viewDough = getStringValue(DATA.DOUGH, data.dough);
  const viewSauces = getStringValue(DATA.SAUCES, data.sauces);
  const viewCheeses = data.cheeses.length
    ? `, ${getArrayValues(DATA.CHEESES, data.cheeses)}`
    : '';
  const viewVegetables = data.vegetables.length
    ? `, ${getArrayValues(DATA.VEGETABLES, data.vegetables)}`
    : '';
  const viewMeat = data.meat.length
    ? `, ${getArrayValues(DATA.MEAT, data.meat)}`
    : '';

  return (
    <StyledCard>
      <CardContent>
        <Typography component="h3" variant="h6">
          Своя пицца
        </Typography>

        <Box marginBottom={2}>
          <Typography variant="body2">
            {` Размер пиццы: ${viewSize} на ${viewDough} тесте, ${viewSauces} соус ${viewCheeses}${viewVegetables}${viewMeat}`}
          </Typography>
        </Box>

        <Divider />

        <Box marginTop={2}>
          <Typography variant="h6">
            Цена: {getTotalPrice(data) + 200}
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

PizzaCard.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default PizzaCard;
