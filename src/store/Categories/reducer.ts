import { ICategoriesState, ProductActionTypes } from './types';

const initialState: ICategoriesState = [
    { id: 1, name: "HOODIE" },
    { id: 2, name: "SWEATSHIRT" },
    { id: 3, name: "T-SHIRT" },
]


const categoriesReducer = (
    state = initialState,
    action: { type: ProductActionTypes.SET_IS_AUTH; payload: boolean }
): ICategoriesState => {
    switch (action.type) {
        // case UserActionTypes.SET_IS_AUTH:
        //   return {
        //     ...state,
        //     isAuth: action.payload,
        //   };

        default:
            return state;
    }
};

export default categoriesReducer;
