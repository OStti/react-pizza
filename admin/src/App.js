import React from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('slug', data.slug);
    formData.append('price', data.price);
    formData.append('category', data.category);
    formData.append('image', data.image[0]);

    await fetch('http://localhost:3000/ingredients', {
      method: 'POST',
      body: formData,
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">
          Название ингредиента:
          <input id="name" type="text" name="name" ref={register} />
        </label>
      </div>
      <div>
        <label htmlFor="slug">
          Идентификатор ингредиента:
          <input id="slug" type="text" name="slug" ref={register} />
        </label>
      </div>
      <div>
        <label htmlFor="price">
          Цена ингредиента:
          <input id="price" type="number" name="price" ref={register} />
        </label>
      </div>
      <div>
        <label htmlFor="category">
          Категория ингредиента:
          <select name="category" ref={register}>
            <option value="sauces">Соусы</option>
            <option value="cheeses">Сыры</option>
            <option value="vegetables">Овощи</option>
            <option value="meat">Мясо</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="image">
          Картинка ингредиента:
          <input id="image" type="file" name="image" ref={register} />
        </label>
      </div>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default App;
