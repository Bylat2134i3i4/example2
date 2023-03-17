import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IReg, IAuth } from '../models/user.interface';
// import axios from "axios";
// export const API_URL = `http://localhost:8080/api`;

// const $api = axios.create({
//   withCredentials: true,
//   baseURL: API_URL,
// });

// $api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//   return config;
// });

// export default $api;

interface arr {
  message: string;
}

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api',
  }),
  endpoints: (build) => ({
    Reg_User: build.mutation({
      query: (body: IReg) => {
        return {
          url: '/register',
          method: 'POST',
          body,
        };
      },
    }),
    Auth_User: build.mutation({
      query: (body: IAuth) => {
        return {
          url: '/login',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useReg_UserMutation, useAuth_UserMutation } = userAPI;
