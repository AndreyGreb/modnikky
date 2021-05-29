import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { check } from './http/userAPI';

import './main.scss';
import { toggleUserIsAuthAction } from './store/User/actions';
import getUser from './store/User/selectors';

const App = () => {
  const [loading, setLoading] = useState(true);

  const userDispatch = useDispatch();
  const userIsAuth = useSelector(getUser);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   check()
  //     .then((data) => {
  //       console.log(data);
  //       if (data.message) {
  //         localStorage.removeItem('token');
  //         userDispatch(toggleUserIsAuthAction(false));
  //       } else {
  //         userDispatch(toggleUserIsAuthAction(true));
  //       }
  //     })
  //     .finally(() => setLoading(false));

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
