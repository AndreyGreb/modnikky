import { combineReducers } from 'redux';
import categoriesReducer from './Categories/reducer';
import productReducer from './Products/reducer';
import userReducer from './User/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  categories: categoriesReducer,
});

export default rootReducer;
