import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import App from './App';
import Home from "./pages/Home";

const stores = {

};

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();
useStrict(true);

ReactDOM.render((
  <Provider {...stores}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
