import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { AuthButton } from './styles';

export default () => {
  return (
    <Box marginBottom={3}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6">
            Pizza Marista
          </Typography>
          <AuthButton color="inherit">Login</AuthButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
