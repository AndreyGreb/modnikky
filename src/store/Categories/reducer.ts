import { CategoryActionTypes, ICategoriesState, IObject } from './types';

const initialState: ICategoriesState = { category: [] };

const categoriesReducer = (
  state = initialState,
  action: { type: CategoryActionTypes.GET_CATEGORY; payload: [IObject] }
): ICategoriesState => {
  switch (action.type) {
    case CategoryActionTypes.GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
