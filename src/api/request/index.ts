import { axiosInstance } from '../instance';
import endpoints from '../endpoints';
import { AxiosPromise } from 'axios';
import { IRegResponse, IRegRequest, IAuthRequest, IAuthResponse } from './types';

export const Reg_User = (params: IRegRequest): AxiosPromise<IRegResponse> =>
  axiosInstance.post(endpoints.REG.REGISTR, params);
export const Auth_User = (params: IAuthRequest): AxiosPromise<IAuthResponse> =>
  axiosInstance.post(endpoints.AUTH.LOGIN, params);
export const Refresh_Token = () => axiosInstance.get(endpoints.AUTH.REGRESH);
