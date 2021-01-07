import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './styledComponents';

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
