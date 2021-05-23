import { IUserState, UserActionTypes } from './types';

const initialState: IUserState = {
  isAuth: false,
  user: { email: '' },
};

const userReducer = (
  state = initialState,
  action: {
    type: UserActionTypes.SET_IS_AUTH | UserActionTypes.SET_USER;
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

    default:
      return state;
  }
};

export default userReducer;
