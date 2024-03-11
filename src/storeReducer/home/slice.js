import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getHomeCarousel } from './actions';

const initialState = {
  loadedFirstTime: false,
  loading: false,
  carouselContent: [],
  carouselRequested: false
}

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getHomeCarousel.fulfilled, (state, action) => {
      state.carouselContent = action.payload;
    });
    builder.addCase(getHomeCarousel.pending, (state) => {
      state.carouselRequested = true;
    })
  }
});

export default homeSlice.reducer;