import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {Router, Route, hashHistory, borswerHistory} from 'react-router';
import todoApp from './reducer'
import App from './containers/App'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger();
const store = createStore(todoApp, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log(1);
});

render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
  </Router>

</Provider>, document.getElementById('app'))
