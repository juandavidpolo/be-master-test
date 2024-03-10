import axios from 'axios';

const axiosInstance = axios.create()
axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
  return config
}, (error) => {
  return Promise.reject(error);
})
axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;