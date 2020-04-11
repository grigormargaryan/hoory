import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './history';
import configureStore from './redux/store';
import { PrivateRoute, PublicRoute } from './middlewares/routeMiddleware';

import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import Dashboard from './components/dashboard/Dashboard';

import './index.css';

async function init() {
  const store = await configureStore(history);
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <div className="app">
          <Switch>
            <PublicRoute exact path="/" name="Sign up" component={SignUp} />
            <PublicRoute exact path="/sign-in" name="Sign in" component={SignIn} />
            <PrivateRoute path="/dashboard" exact name="Home" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
}

init();
