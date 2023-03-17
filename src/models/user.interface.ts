export interface IReg {
  lastName: string; //фамилия
  firstName: string; //имя
  middleName: string; // отчество
  registrationPurposeCode: number;
  agreement: boolean;
  phone: string;
  password: string;
}

export interface IAuth {
  username: string;
  password: string;
}
