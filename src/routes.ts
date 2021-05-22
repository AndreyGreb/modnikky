import Basket from './pages/Basket/Basket';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/NotFound/NotFound';
import {
  MAIN_ROUTE,
  BASKET_ROUTE,
  NOT_FOUND_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  CATALOG_ROUTE,
  PRODUCT_ROUTE,
} from './utils/consts';
import Auth from './pages/Auth/Auth';
import Catalog from './pages/Catalog/Catalog';
import ProductCard from './pages/ProductCard/ProductCard';

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
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: CATALOG_ROUTE,
    Component: Catalog,
  },
  {
    path: PRODUCT_ROUTE,
    Component: ProductCard,
  },
  {
    path: NOT_FOUND_ROUTE,
    Component: NotFound,
  },
];
