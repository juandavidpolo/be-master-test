import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { loginUser } from "../actions";

const initialState = {
  loadedFirstTime: false,
  loading: false,
  isLoggedUser: false
}

const loginSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action)=>{
      state.isLoggedUser = action.payload
    })
    builder.addCase(loginUser.pending, (state, action) => {

    })
    builder.addCase(loginUser.rejected, (state, action) => {

    })
  }
});

export default loginSlice.reducer;