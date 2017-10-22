'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
  findNodeHandle,  
  Linking,
  WebView,
  Platform,
  BackHandler, 
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import * as commonColors from '../../../styles/commonColors';
import { screenWidth, screenHeight, navBarHeight } from '../../../styles/commonStyles';
import language from '../../../utils/language/language';

import Parent from '../../parent';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
    if (Platform.OS === "android") {
      BackHandler.addEventListener("hardwareBackPress", this.handleBackButtonClick);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === "android") {
      BackHandler.removeEventListener("hardwareBackPress", this.handleBackButtonClick);
    }
  }

  handleBackButtonClick() {
    Actions.Main();
    return true;
  }

  render() {
    const { currentLanguage, title } = this.props;

    return (
      <Parent title={"signup"}>
        <WebView 
          source={{url: 'http://192.168.0.91/salama/signup.html'}} style={styles.loginView} 
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          javaScriptEnabledAndroid={true}
          scalesPageToFit={true}
          startInLoadingState={true}
        />
      </Parent>
    );
  }
}

const styles = StyleSheet.create({
  loginView: {
    height: screenHeight - navBarHeight,
    width: screenWidth,
  }
});

export default connect(state => ({
  currentLanguage: state.login.currentLanguage,
}),{})(Signup);