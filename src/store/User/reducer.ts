import { IUser, IUserState, UserActionTypes } from './types';

const initialState: IUserState = {
  isAuth: false,
  user: {},
};

const userReducer = (state = initialState, action: IUser): IUserState => {
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
