export enum UserActionTypes {
  SET_IS_AUTH = 'SET_IS_AUTH',
}

export interface IUserState {
  isAuth: boolean;
  user: { token?: string };
}
