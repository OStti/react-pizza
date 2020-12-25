import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type = 'button', children }) => {
  return (
    <button type={type === 'submit' ? 'submit' : 'button'}>{children}</button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
