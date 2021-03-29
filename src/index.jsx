import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import './index.css';

import Landing from './views/Landing.jsx';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
