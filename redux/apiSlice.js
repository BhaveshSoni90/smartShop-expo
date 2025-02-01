import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  apiBaseUrl: 'http://localhost:5000', // Default API address
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setApiBaseUrl: (state, action) => {
      state.apiBaseUrl = action.payload;
    },
  },
});

export const { setApiBaseUrl } = apiSlice.actions;

export const selectApiBaseUrl = (state) => state.api.apiBaseUrl;

export default apiSlice.reducer;
