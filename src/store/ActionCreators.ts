import { store } from './store';
import { IAuthRequest, IRegRequest } from '../api/request/types';
import api from '../api';
import { Dispatch } from '@reduxjs/toolkit';
import { RegUser, AuthUser } from './Slices/GeneralSlice';
import { isTokenExpired } from '../utils/jwt';

export const loginUser =
  (data: IAuthRequest) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      let res = await api.auth.Auth_User(data);
      if (res.status === 200) {
        dispatch(AuthUser(res.data.answer));
      }
      if (res.status === 403) {
        res = await api.auth.Refresh_Token();
        dispatch(AuthUser(res.data.answer));
      }
    } catch (e: any) {
      console.error(e);
    }
  };

export const regUser =
  (data: IRegRequest) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const res = await api.auth.Reg_User(data);
      console.log(res.status);
      if (res.status === 200) {
        dispatch(RegUser(res.data.answer));
      }
    } catch (e: any) {
      console.error(e);
    }
  };

export const getAccessToken =
  () =>
  async (dispatch: Dispatch<any>): Promise<string | null> => {
    try {
      const accessToken = store.getState().slice.accessToken;

      if (!accessToken || isTokenExpired(accessToken)) {
        const res = await api.auth.Refresh_Token();
        dispatch(AuthUser(res.data));
      }
      return accessToken;
    } catch (e) {
      console.error(e);

      return null;
    }
  };
