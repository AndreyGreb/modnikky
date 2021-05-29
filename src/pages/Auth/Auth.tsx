import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import { login, registration } from '../../http/userAPI';
import {
  setUserAction,
  toggleUserIsAuthAction,
} from '../../store/User/actions';
import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
} from '../../utils/consts';
import style from './Auth.module.scss';
import FormCreateAccount from './FormCreateAccount/FormCreateAccount';
import FormSignIn from './FormSignIn/FormSignIn';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const isRegistration = location.pathname === REGISTRATION_ROUTE;

  const [inputAuthState, setInputAuthState] = useState({
    email: '',
    password: '',
  });
  const [inputRegistrState, setInputRegistrState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const userDispatch = useDispatch();
  const history = useHistory();

  const submitData = async () => {
    let data: { email?: string } | any;
    if (isLogin) {
      data = await login(inputAuthState.email, inputAuthState.password);
      setInputAuthState({ email: '', password: '' });
      userDispatch(toggleUserIsAuthAction(true));
    } else if (isRegistration) {
      data = await registration(
        inputRegistrState.email,
        inputRegistrState.password
      );

      setInputRegistrState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    }
    userDispatch(setUserAction({ email: data.email }));
    userDispatch(toggleUserIsAuthAction(true));
    history.push(MAIN_ROUTE);
  };

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

          {isLogin && (
            <FormSignIn
              inputAuthState={inputAuthState}
              setInputAuthState={setInputAuthState}
              submitData={submitData}
            />
          )}

          {isRegistration && (
            <FormCreateAccount
              inputRegistrState={inputRegistrState}
              setInputRegistrState={setInputRegistrState}
              submitData={submitData}
            />
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Auth;
