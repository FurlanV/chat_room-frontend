import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux"
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from "./store"
import { Route, Switch } from "react-router-dom"

import App from './components/App';

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));