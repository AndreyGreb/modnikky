import { IUserState, UserActionTypes } from './types';

const initialState: IUserState = {
  isAuth: true,
  user: {},
};

const userReducer = (
  state = initialState,
  action: { type: UserActionTypes.SET_IS_AUTH; payload: boolean }
): IUserState => {
  switch (action.type) {
    case UserActionTypes.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
