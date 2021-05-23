import { UserActionTypes } from './types';

export const toggleUserIsAuthAction = (toggleUserIsAuth: boolean) => {
  return {
    type: UserActionTypes.SET_IS_AUTH,
    payload: toggleUserIsAuth,
  };
};

export const setUserAction = (setUser: { email: string }) => {
  return {
    type: UserActionTypes.SET_USER,
    payload: setUser,
  };
};
