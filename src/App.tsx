import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { check } from './http/userAPI';

import './main.scss';
import { toggleUserIsAuthAction } from './store/User/actions';

const App = () => {
  const [loading, setLoading] = useState(true);

  const userDispatch = useDispatch();
  if (localStorage.getItem('token')) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      check()
        .then((data) => {
          userDispatch(toggleUserIsAuthAction(true));
        })
        .finally(() => setLoading(false));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
