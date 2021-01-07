import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import styled from 'styled-components';
import PizzaCard from '../components/PizzaCard';

const Icon = styled(CheckCircleIcon)`
  font-size: 6rem;

  ${({ theme }) => `
    color: ${theme.palette.primary.main}
  `}
`;

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

export default () => {
  const pizza = useSelector((state) => state.pizza);

  return (
    <Wrapper>
      <Icon />
      <Typography component="h2" variant="h4">
        Спасибо за заказ!
      </Typography>
      <Box marginBottom={2}>
        <Typography component="subtitle1">
          Заказ успешно оплачен, ждите вашу пиццу через час.
        </Typography>
      </Box>

      <PizzaCard data={pizza} />
    </Wrapper>
  );
};
