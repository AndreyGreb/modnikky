import { ICategoriesState } from './Categories/types';
import { IProductState } from './Products/types';
import { IUserState } from './User/types';

type Tstate = {
  user: IUserState;
  product: IProductState;
  categories: ICategoriesState;
};

export default Tstate;
