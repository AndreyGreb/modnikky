export enum UserActionTypes {
  SET_IS_AUTH = 'SET_IS_AUTH',
}

export interface IUserState {
  isAuth: boolean;
}

interface IUserAction {
  type: UserActionTypes.SET_IS_AUTH;
}

export type UserAction = IUserAction;
