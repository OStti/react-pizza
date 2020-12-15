import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../slices/user';

export default () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => dispatch(login(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          name="login"
          ref={register}
          placeholder="Введите логин..."
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          ref={register}
          placeholder="Введите пароль..."
        />
      </div>
      <div>
        <button type="submit">Войти</button>
      </div>
      <Link to="/registration">Зарегистрироваться</Link>
    </form>
  );
};
