import { Hotel } from '@/components/organisms/HotelCard';
import { createSlice } from '@reduxjs/toolkit';
import { getAllHotels } from './actionCreators';

interface HotelListSliceState {
  data: Hotel[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: HotelListSliceState = {
  data: [],
  isError: false,
  isLoading: false,
};

const HotelListSlice = createSlice({
  name: 'HotelListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(getAllHotels.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(getAllHotels.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(getAllHotels.rejected, (state) => {
      state.isError = false;
    });
  },
});

export const HotelListSliceActions = HotelListSlice.actions;
export const HotelListSliceReducer = HotelListSlice.reducer;
