import { UserActionTypes } from './types';

const toggleUserIsAuthAction = (toggleUserIsAuth: boolean) => {
  return {
    type: UserActionTypes.SET_IS_AUTH,
    payload: toggleUserIsAuth,
  };
};

export default toggleUserIsAuthAction;
