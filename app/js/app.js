import React, { Component } from 'react';
import {
  Linking,
  Alert,
} from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './utils/middlewares/promiseMiddleware';
import { Actions, ActionConst, Scene, Router } from 'react-native-router-flux';
import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk, promiseMiddleware)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import Login from './container/auth/login/login';
import Signup from './container/auth/signup/signup';
import Main from './container/main';
import AboutUS from './container/about_us';
import Claim from './container/claims';
import MissionVission from './container/mission_vission';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const scenes = Actions.create(
      <Scene key="root">
        <Scene key="Login" component={ Login } hideNavBar={ true } panHandlers={null}/>
        <Scene key="Signup" component={ Signup }  hideNavBar={ true } panHandlers={null}/>
        <Scene key="Main" component={ Main } initial={ true }  hideNavBar={ true } panHandlers={null}/>
        <Scene key="AboutUS" component={ AboutUS }  hideNavBar={ true } panHandlers={null}/>
        <Scene key="MissionVission" component={ MissionVission } hideNavBar={ true } panHandlers={null}/>
        <Scene key="Claim" component={ Claim } hideNavBar={ true } panHandlers={null}/>
      </Scene>
    );

    return (
      <Provider store={ store }>
        <Router hideNavBar={ true } scenes={ scenes }/>
      </Provider>
    );
  }
}