/* eslint-disable no-undef */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Detalle from './components/Detalle';

const root = document.getElementById('root');
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/detail/:d" component={Detalle} />
    </Switch>
  </Router>,
  root,
);
