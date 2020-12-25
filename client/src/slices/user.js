import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: 'Guest',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }) => payload,
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
