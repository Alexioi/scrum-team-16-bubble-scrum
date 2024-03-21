import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockHotels } from './mockHotels';

export const getAllHotels = createAsyncThunk('hotel/getAllHotels', async () => {
  return mockHotels;
});
