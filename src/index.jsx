import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import Landing from './views/Landing.jsx';
import About from './views/About.jsx';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
