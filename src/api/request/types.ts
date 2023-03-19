export interface IRegRequest {
  lastName: string; //фамилия
  firstName: string; //имя
  middleName: string; // отчество
  registrationPurposeCode: number;
  agreement: boolean;
  phone: string;
  password: string;
}

export interface IRegResponse {
  answer: any; //Error[] | string
}

export interface Error {
  message: string;
}

export interface IAuthRequest {
  username: string;
  password: string;
}

export interface IAuthResponse {
  answer: any; //AuthSuccess | Error[];
}

export interface AuthSuccess {
  accessToken: string;
  refreshToken: string;
}
