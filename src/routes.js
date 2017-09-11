import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import configureStore from './store/configureStore';

import App from './components/App';
import Home from './containers/HomeContainer';

const store = configureStore();

export default (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path=":username" component={Home} />
      </Route>
    </Router>
  </Provider>
);
