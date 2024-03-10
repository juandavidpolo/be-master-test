import { configureStore } from "@reduxjs/toolkit";

import loginSlice from './login/slice';
import homeSlice from './home/slice';
import contentCategorySlice from './contentCategory/slice';

export const storeReducer = configureStore({
  reducer: {
    login: loginSlice,
    home: homeSlice,
    contentCategory: contentCategorySlice
  }
});

export default storeReducer;