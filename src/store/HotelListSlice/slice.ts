import { createSlice } from '@reduxjs/toolkit';
import { Hotel } from '@/components';
import { getAllHotels } from './actionCreators';

interface HotelListSliceState {
  data: Hotel[];
  isLoading: boolean;
  error: string;
}

const initialState: HotelListSliceState = {
  data: [],
  error: '',
  isLoading: false,
};

const HotelListSlice = createSlice({
  name: 'HotelListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllHotels.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });

    builder.addCase(getAllHotels.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(getAllHotels.rejected, (state) => {
      state.error = 'Ошибка';
    });
  },
});

export const HotelListSliceActions = HotelListSlice.actions;
export const HotelListSliceReducer = HotelListSlice.reducer;
