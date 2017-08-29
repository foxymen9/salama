import React, { Component } from 'react';
import {
  Linking,
  Alert,
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from '../js/utils/middlewares/promiseMiddleware';
import { Actions, ActionConst, Scene, Router } from 'react-native-router-flux';
import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk, promiseMiddleware)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import Login from './container/auth/containers/login';
import Signup from './container/auth/containers/signup';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      loggedIn: false,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const scenes = Actions.create(
      <Scene key="root">
        <Scene key="Login" component={ Login } initial={ true } hideNavBar={ true }/>
        <Scene key="Signup" component={ Signup }  hideNavBar={ true }/>
      </Scene>
    );

    return (
      <Provider store={ store }>
        <Router hideNavBar={ true } scenes={ scenes }/>
      </Provider>
    );
  }
}