import { configureStore } from "@reduxjs/toolkit";

import loginSlice from './login/slice';
import homeSlice from './home/slice';

export const storeReducer = configureStore({
  reducer: {
    login: loginSlice,
    home: homeSlice,
  }
});

export default storeReducer;