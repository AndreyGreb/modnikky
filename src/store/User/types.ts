export enum UserActionTypes {
  SET_IS_AUTH = 'SET_IS_AUTH',
  SET_USER = 'SET_USER',
  LOGOUT_USER = 'LOGOUT_USER',
}

export interface IUserState {
  isAuth: boolean;
  user: { email?: string };
}
