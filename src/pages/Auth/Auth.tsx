import React from 'react';
import { useLocation } from 'react-router';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import style from './Auth.module.scss';
import FormSignIn from './FormSignIn/FormSignIn';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const isRegistration = location.pathname === REGISTRATION_ROUTE;

  return (
    <PageWrapper colorHeader="black">
      <div className={style.form}>
        <div className={style.form__content}>
          {/* block header */}
          <div className={style['form__content-header']}>
            <span>
              {isLogin && 'SIGN IN'}
              {isRegistration && 'CREATE ACCOUNT'}
            </span>
          </div>

          {
            isLogin && <FormSignIn />

            // <FormCreateAccount toggleForm={toggleForm} />
          }
        </div>
      </div>
    </PageWrapper>
  );
};

export default Auth;
