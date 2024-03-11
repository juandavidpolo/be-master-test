import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser } from '../../utils/complements';
import axiosInstance from '../../utils/axios';

export const loginUser = createAsyncThunk("loginUser", async (payload, thunkAPI) => {
  try {
    const response = await axiosInstance.get(`/data/login/users.json`);
    if (response && response.status === 200) {
      let users = response.data.users
      let authenticatedUser = users.find(function (user) {
        if (user.email === payload.email && user.password === payload.password){
          let userLogged = {
            email : user.email,
            is: user.id
          }
          setUser(userLogged);
        }
        return user.email === payload.email && user.password === payload.password;
      });
      if (authenticatedUser) {
        console.log("login")
        return true;
      } else {
        console.log("not login")
        //thunkAPI.dispatch(notification({ title: `We are having some issues`, message: `${e.message}`, type: `error` }));
        return false;
      }
    } else {
      return false
    }
  } catch (e) {
    //thunkAPI.dispatch(notification({ title: `We are having some issues`, message: `${e.message}`, type: `error` }));
    console.log("Error:", e)
  }
})