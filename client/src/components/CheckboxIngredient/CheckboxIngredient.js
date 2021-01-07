import React, { forwardRef } from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { Label, Input, ImgWrapper, Img, Check } from './styles';

const CheckboxIngredient = forwardRef(({ data, watchField = [] }, ref) => {
  const { name, slug, category, price } = data;

  return (
    <>
      <Input id={slug} type="checkbox" value={slug} name={category} ref={ref} />
      <Label htmlFor={slug}>
        <ImgWrapper className="label-img-wrapper">
          <Img
            src={`/assets/thumbnails/${category}/${slug}.png`}
            alt={category}
          />
        </ImgWrapper>
        <Typography component="span" variant="h6">
          {name}
        </Typography>
        <Typography component="span">{price}р</Typography>
        <Check>
          {watchField.find((item) => item === slug) && (
            <CheckCircleIcon color="primary" />
          )}
        </Check>
      </Label>
    </>
  );
});

CheckboxIngredient.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  watchField: PropTypes.arrayOf(PropTypes.string),
};

CheckboxIngredient.defaultProps = {
  watchField: [],
};

export default CheckboxIngredient;
