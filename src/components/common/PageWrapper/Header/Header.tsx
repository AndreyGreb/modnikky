import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import toggleUserIsAuthAction from '../../../../store/User/actions';
import getUser from '../../../../store/User/selectors';
import {
  BASKET_ROUTE,
  CATALOG_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
} from '../../../../utils/consts';
import { IHeader } from '../../Interfaces/PageWraper/Interfaces';

import style from './Header.module.scss';

const Header = ({ colorHeader }: IHeader) => {
  const userSelector = useSelector(getUser);
  const dispatch = useDispatch();

  const toggleUserIsAuth = () => {
    dispatch(toggleUserIsAuthAction(false));
  };

  return (
    <header className={`${style.header} ${style[colorHeader]}`}>
      <nav className={style.navbar}>
        <div className={style.navbar__left}>
          <Link to="/">NEW ARRIVALS</Link>
          <Link to={CATALOG_ROUTE}>SHOP</Link>
          <Link to="/">COLLECTIONS</Link>
        </div>
        <Link to={MAIN_ROUTE} className={style.logo}>
          MODNIKKY
        </Link>
        <div className={style.navbar__right}>
          {userSelector.isAuth ? (
            <div
              onClick={toggleUserIsAuth}
              onKeyDown={toggleUserIsAuth}
              role="presentation">
              SIGN OUT
            </div>
          ) : (
            <Link to={LOGIN_ROUTE}>SIGN IN</Link>
          )}
          <Link to={BASKET_ROUTE} className={style.navbar__right__bag}>
            <div>BAG</div>
            <span>(2)</span>
          </Link>
          {/* <div>
            <svg
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.0938 2.22812C23.6644 0.79865 21.7719 0.017362 19.7521 0.017362C17.7324 0.017362 15.8341 0.804437 14.4047 2.2339L13.6581 2.98047L12.9 2.22233C11.4705 0.792862 9.56647 0 7.54669 0C5.53271 0 3.63447 0.787075 2.21079 2.21075C0.781319 3.64022 -0.00575563 5.53846 3.16897e-05 7.55824C3.16897e-05 9.57801 0.792894 11.4705 2.22236 12.8999L13.0909 23.7685C13.2414 23.919 13.444 24 13.6407 24C13.8375 24 14.0401 23.9248 14.1905 23.7743L25.0823 12.9231C26.5117 11.4936 27.2988 9.59537 27.2988 7.5756C27.3046 5.55582 26.5233 3.65758 25.0938 2.22812ZM23.9827 11.8177L13.6407 22.1191L3.32195 11.8003C2.18764 10.666 1.56261 9.16132 1.56261 7.55824C1.56261 5.95515 2.18185 4.45045 3.31616 3.32192C4.44469 2.19339 5.94939 1.56836 7.54669 1.56836C9.14978 1.56836 10.6603 2.19339 11.7946 3.32771L13.1025 4.63564C13.4092 4.94237 13.9012 4.94237 14.2079 4.63564L15.5043 3.33928C16.6386 2.20497 18.1491 1.57994 19.7464 1.57994C21.3437 1.57994 22.8484 2.20497 23.9827 3.33349C25.117 4.46781 25.7362 5.97251 25.7362 7.5756C25.742 9.17868 25.117 10.6834 23.9827 11.8177Z"
                fill={colorHeader === 'white' ? '#fff' : '#000'}
              />
            </svg>
          </div> */}
        </div>
      </nav>
    </header>
  );
};
export default Header;
