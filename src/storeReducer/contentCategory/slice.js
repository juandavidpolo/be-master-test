import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getContentCategory } from "./actions";

const initialState = {
  loadedFirstTime: false,
  loading: false,
  isPending: false,
  name: "",
  imgBg: "",
  vidBg: ""
}

const contentCategorySlice = createSlice({
  name: "contentCategories",
  initialState: initialState,
  reducers: {
    resetContentCategories: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(getContentCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.name = action.payload.name;
      state.imgBg = action.payload.imgSrc;
      state.vidBg = action.payload.vidSrc;
      state.isPending = false;
      if(action && action.payload && action.payload.movies){
        state.movies = action.payload.movies;
      }
      if (action && action.payload && action.payload.series) {
        state.series = action.payload.series;
      }
      if (action && action.payload && action.payload.documentaries) {
        state.documentaries = action.payload.documentaries;
      }
    });
    builder.addCase(getContentCategory.pending, (state) => {
      state.loadedFirstTime = true;
      state.loading = true;
      state.isPending = true;
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

export const { resetContentCategories } = contentCategorySlice.actions;
export default contentCategorySlice.reducer;