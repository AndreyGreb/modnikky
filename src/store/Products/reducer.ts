import { IProductState, ProductActionTypes } from './types';

const initialState: IProductState = [
  {
    id: 1,
    price: 149.99,
    img: 'https://a.lmcdn.ru/img600x866/R/T/RTLAAD428501_13740757_1_v1_2x.jpg',
  },
  {
    id: 2,
    price: 149.99,
    img: 'https://a.lmcdn.ru/img600x866/R/T/RTLAAD427901_13740742_1_v1_2x.jpg',
  },
  {
    id: 3,
    price: 149.99,
    img: 'https://a.lmcdn.ru/img600x866/R/T/RTLAAD427801_13745218_1_v1_2x.jpg',
  },
];
const productReducer = (
  state = initialState,
  action: { type: ProductActionTypes.SET_IS_AUTH; payload: boolean }
): IProductState => {
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

export default productReducer;
