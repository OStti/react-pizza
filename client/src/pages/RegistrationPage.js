import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          name="login"
          ref={register({
            required: {
              slug: true,
              message: 'Данное поле является обязательным для заполнения',
            },
            minLength: {
              slug: 4,
              message: 'Минимальная длина логина - 4 символа',
            },
          })}
          placeholder="Введите логин..."
        />
        <div>{errors.login && errors.login.message}</div>
      </div>
      <div>
        <input
          type="password"
          name="password"
          ref={register({
            required: {
              slug: true,
              message: 'Данное поле является обязательным для заполнения',
            },
          })}
          placeholder="Введите пароль..."
        />
        <div>{errors.password && errors.password.message}</div>
      </div>
      <div>
        <button type="submit">Зарегистрироваться</button>
      </div>
      <Link to="/login">Войти</Link>
    </form>
  );
};
