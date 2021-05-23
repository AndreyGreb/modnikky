import { IUserState, UserActionTypes } from './types';

const initialState: IUserState = {
  isAuth: false,
  user: {},
};

const userReducer = (
  state = initialState,
  action: {
    type:
      | UserActionTypes.SET_IS_AUTH
      | UserActionTypes.SET_USER
      | UserActionTypes.LOGOUT_USER;
    payload: any;
  }
): IUserState => {
  switch (action.type) {
    case UserActionTypes.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };

    case UserActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case UserActionTypes.LOGOUT_USER:
      localStorage.removeItem('token');
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};

export default userReducer;
