import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getByEndPoint } from '../api';

const initialState = {
  isFetching: false,
  error: '',
  items: [],
};

export const fetchIngredients = createAsyncThunk(
  'ingredietns/fetchIngredients',
  async () => {
    const ingredients = await getByEndPoint('/ingredients');
    return ingredients;
  }
);

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: {
    [fetchIngredients.pending]: (state) => {
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    },
    [fetchIngredients.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        items: payload,
      };
    },
    [fetchIngredients.rejected]: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
});

export default ingredientsSlice.reducer;
