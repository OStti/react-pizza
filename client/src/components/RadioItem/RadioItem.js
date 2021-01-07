import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { Label, Input } from './styles';

const RadioItem = forwardRef(({ data }, ref) => {
  const { name, slug, category } = data;

  return (
    <>
      <Input id={slug} type="radio" name={category} value={slug} ref={ref} />
      <Label htmlFor={slug}>
        <Typography component="span">{name}</Typography>
      </Label>
    </>
  );
});

RadioItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default RadioItem;
