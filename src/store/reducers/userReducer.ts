import { IUserState, UserAction, UserActionTypes } from '../types/types';

const initialState: IUserState = {
  isAuth: false,
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.SET_IS_AUTH:
      return {
        ...state,
        isAuth: true,
      };

    default:
      return state;
  }
};

export default userReducer;
