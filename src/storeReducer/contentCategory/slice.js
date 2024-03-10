import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getContentCategory } from "./actions";

const contentCategorySlice = createSlice({
  name: "contentCategories",
  initialState: {
    loadedFirstTime: false,
    loading: false,
    isPending: false,
    name:"",
    imgBg:"",
    vidBg:"",
    movies:""
  },
  extraReducers: (builder) => {
    builder.addCase(getContentCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.name = action.payload.name;
      state.imgBg = action.payload.imgSrc;
      state.vidBg = action.payload.vidSrc;
      state.movies = action.payload.movies;
    });
    builder.addCase(getContentCategory.pending, (state) => {
      state.loadedFirstTime = true;
      state.loading = true;
    });
    builder.addCase(getContentCategory.rejected, (state) => {
      state.loading = false;
      state.name = "";
      state.imgBg = "";
      state.vidBg = "";
      state.movies = [];
    });
  }
});

export default contentCategorySlice.reducer;