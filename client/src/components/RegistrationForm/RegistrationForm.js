import React from 'react';
import { Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        gutterBottom="true"
        align="center"
      >
        Зарегистрироваться
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box marginBottom={1}>
          <TextField
            type="email"
            name="email"
            label="E-mail"
            inputRef={register}
            fullWidth
            required
            autoFocus
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            type="password"
            name="password"
            label="Пароль"
            inputRef={register}
            fullWidth
            required
          />
        </Box>

        <Button
          type="submit"
          variant="outlined"
          color="primary"
          size="large"
          fullWidth
        >
          Зарегистрироваться
        </Button>

        <Box textAlign="center" marginTop={2}>
          <Link to="/login">Войти</Link>
        </Box>
      </form>
    </>
  );
};
