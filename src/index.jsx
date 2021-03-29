import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import './index.css';

import Landing from './views/Landing.jsx';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" component={Landing} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
