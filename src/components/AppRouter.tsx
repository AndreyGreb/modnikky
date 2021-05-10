import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authRoutes, publicRoutes } from '../routes';
import { NOT_FOUND_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const uu = useSelector((state) => state);
  console.log(uu);
  return (
    <Switch>
      {uu &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}

      <Redirect to={NOT_FOUND_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
