const API_URL = 'http://localhost:3000';

export const createOrder = async (data) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getByEndPoint = async (endpoint) => {
  const response = await fetch(`${API_URL}${endpoint}`);
  return response.json();
};

export const deleteIngredient = async (id) => {
  await fetch(`${API_URL}/ingredients/${id}`, {
    method: 'DELETE',
  });
};

export const updateIngredient = async (id, data) => {
  await fetch(`${API_URL}/ingredients/${id}`, {
    method: 'PUT',
    body: data,
  });
};
