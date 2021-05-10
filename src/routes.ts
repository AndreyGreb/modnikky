import Basket from './pages/Basket';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/NotFound';
import { MAIN_ROUTE, BASKET_ROUTE, NOT_FOUND_ROUTE } from './utils/consts';

export const authRoutes = [
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: NOT_FOUND_ROUTE,
    Component: NotFound,
  },
];
