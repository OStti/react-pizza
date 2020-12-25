import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateIngredient, deleteIngredient } from '../api';
import { fetchIngredients } from '../slices/ingredients';

export default () => {
  const [editableIngredient, setEditableIngredient] = useState(null);
  const { register, handleSubmit } = useForm();

  const ingredients = useSelector((state) => state.ingredients.items);
  const isFetching = useSelector((state) => state.ingredients.isFetching);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    deleteIngredient(id);
    dispatch(fetchIngredients());
  };

  const handleEdit = (id) => {
    const ingredient = ingredients.find((item) => item.id === id);
    setEditableIngredient(ingredient);
  };

  const onSubmit = handleSubmit((data) => {
    const { id } = editableIngredient;
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('slug', data.slug);
    formData.append('price', data.price);
    formData.append('category', data.category);
    formData.append('image', data.image[0]);

    updateIngredient(id, formData);

    dispatch(fetchIngredients());
  });

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  if (isFetching) {
    return <div>Загружаем ингредиенты...</div>;
  }

  return (
    <div>
      <h1>Ингредиенты</h1>
      <table>
        <thead>
          <tr>
            <th> </th>
            <th>Название</th>
            <th>Идентификатор</th>
            <th>Цена</th>
            <th>Категория</th>
            <th>Картинка</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map(({ id, name, slug, price, category, image }) => {
            return (
              <tr key={id}>
                <td>
                  <button type="button" onClick={() => handleEdit(id)}>
                    редактировать
                  </button>
                  <button type="button" onClick={() => handleDelete(id)}>
                    удалить
                  </button>
                </td>
                <td>{name}</td>
                <td>{slug}</td>
                <td>{price}</td>
                <td>{category}</td>
                <td>{image}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {editableIngredient && (
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
          <button type="submit">Обновить</button>
        </form>
      )}
    </div>
  );
};
