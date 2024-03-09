import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    loadedFirstTime: false,
    loading: false
  },
  extraReducers: {}
});

export default homeSlice.reducer;