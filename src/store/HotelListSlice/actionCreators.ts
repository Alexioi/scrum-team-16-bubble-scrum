import { createAsyncThunk } from '@reduxjs/toolkit';
import { mockHotels } from './mockHotels';

const getAllHotels = createAsyncThunk('hotel/getAllHotels', async () => {
  return mockHotels;
});

export { getAllHotels };
