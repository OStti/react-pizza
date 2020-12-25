import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addPizza: (state, { payload }) => payload,
  },
});

export const { addPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
