import React, { Component } from 'react';
import {
  Linking,
  Alert,
} from 'react-native';

import codePush from "react-native-code-push";

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Actions, ActionConst, Scene, Router } from 'react-native-router-flux';

import bendService from './bend/bendService'

import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import Login from './auth/containers/login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      initialize: false,
      loggedIn: false,
    };

    bendService.init((err, activeUser)=>{

      console.log("bend init", err, activeUser)

      if(activeUser && activeUser._id) {
        this.setState({ loggedIn: true });

      } else {
        this.setState({ loggedIn: false });
      }

      this.setState({ initialize: true });

      if(activeUser && !activeUser.name) {
        Actions.SetupProfile();
      }
    });
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    if (this.state.initialize === false )
      return null;

    const scenes = Actions.create(
      <Scene key="root">
        <Scene key="Login" component={ Login } initial={ true }/>
      </Scene>
    );

    return (
      <Provider store={ store }>
        <Router hideNavBar={ true } scenes={ scenes }/>
      </Provider>
    );
  }
}

export default codePush(App);