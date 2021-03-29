import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './index.css';

import Landing from './views/Landing.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Landing} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
