import PIZZA_DATA from '../pizzaData';

export const findEl = (propFromData, propFromWatch) => {
  return propFromData.find(({ slug }) => slug === propFromWatch);
};

const getPrice = (propFromData, propFromWatch) => {
  if (typeof propFromWatch === 'string') {
    return findEl(propFromData, propFromWatch).price || 0;
  }

  return propFromWatch && propFromWatch.length
    ? propFromWatch
        .map((item) => findEl(propFromData, item).price || 0)
        .reduce((acc, value) => acc + value, 0)
    : 0;
};

export default (watchedFields) => {
  const { SIZE, DOUGH, SAUCES, CHEESES, VEGETABLES, MEAT } = PIZZA_DATA;
  const { size, dough, sauces, cheeses, vegetables, meat } = watchedFields;

  return (
    getPrice(SIZE, size) +
    getPrice(DOUGH, dough) +
    getPrice(SAUCES, sauces) +
    getPrice(CHEESES, cheeses) +
    getPrice(VEGETABLES, vegetables) +
    getPrice(MEAT, meat)
  );
};
