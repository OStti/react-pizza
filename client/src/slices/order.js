import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createOrder } from '../api';

const initialState = {
  info: {},
  isFetching: false,
  error: '',
};

export const fetchOrder = createAsyncThunk('order/fetchOrder', async (data) => {
  const order = await createOrder(data);
  return order;
});

const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: {
    [fetchOrder.pending]: (state) => {
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    },
    [fetchOrder.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        info: payload,
      };
    },
    [fetchOrder.rejected]: (state, { payload }) => {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
});

export default orderSlice.reducer;
