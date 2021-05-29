import { CategoryActionTypes, ICategoriesState } from './types';

const getCategoriesAction = (getCategories: ICategoriesState) => {
  return {
    type: CategoryActionTypes.GET_CATEGORY,
    payload: getCategories,
  };
};

export default getCategoriesAction;
