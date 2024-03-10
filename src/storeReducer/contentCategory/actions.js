import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from '../../utils/axios';

export const getContentCategory = createAsyncThunk("getContentCategory", async (payload, thunkAPI) => {
  try {
    const response = await axiosInstance.get(`/data/contentCategory/${payload}.json`);
    if (response && response.status === 200) {
      return response.data
    } else {
      return []
    }
  } catch (e) {
    //thunkAPI.dispatch(notification({ title: `We are having some issues`, message: `${e.message}`, type: `error` }));
    console.log("Error:", e)
  }
})