/** Imports */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './config/routes';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <Route 
          key={route.path}
          exact={route.exact} 
          path={route.path} 
          component={route.component} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Router;

