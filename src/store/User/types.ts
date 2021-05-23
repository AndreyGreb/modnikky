export enum UserActionTypes {
  SET_IS_AUTH = 'SET_IS_AUTH',
  SET_USER = 'SET_USER',
}

export interface IUserState {
  isAuth: boolean;
  user: { email: string };
}
