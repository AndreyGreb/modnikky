export enum UserActionTypes {
  SET_IS_AUTH = 'SET_IS_AUTH',
}

export interface IUserState {
  isAuth: boolean;
  user: { token?: string };
}

export interface IUser {
  isAuth: boolean;
  type: UserActionTypes.SET_IS_AUTH;
}
