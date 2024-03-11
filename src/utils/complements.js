import { userKey } from './defaultValues';

export const setUser = (data) => {
  try {
    localStorage.setItem(userKey, JSON.stringify(data));
  } catch (error) {
    console.log(`>>>> setUser -> error: ${error}`)
  }
}

export const getUser = () => {
  let data = null;
  try {
    if (localStorage.getItem(userKey)) {
      data = JSON.parse(localStorage.getItem(userKey));
    }
  } catch (error) {
    console.log(`>>>> getUser -> error: ${error}`)
  }
  return data;
}