import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "home",
  initialState: {
    loadedFirstTime: false,
    loading: false,
  },
  extraReducers: {}
});

export default loginSlice.reducer;