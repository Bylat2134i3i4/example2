import { store } from '../store/store';
import { getAccessToken } from './../store/ActionCreators';
import axios, { AxiosError } from 'axios';
import endpoints from './endpoints';
import { LogOut } from '../store/Slices/GeneralSlice';
export const API_URL = `http://localhost:8080/api`;

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const urlsSkipAuth = [endpoints.REG.REGISTR];

axiosInstance.interceptors.request.use(async (config: any) => {
  if (config.url && urlsSkipAuth.includes(config.url)) {
    return config;
  }

  const accessToken = await store.dispatch(getAccessToken());

  if (accessToken) {
    const autharization = `Bearer ${accessToken}`;

    config.headers = {
      ...config.headers,
      autharization: autharization,
    };

    return config;
  }
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const isLoggedIn = !!store.getState().slice.accessToken;

    if (error.response?.status === 403 && isLoggedIn) {
      store.dispatch(LogOut);
    }

    return error;
  },
);
