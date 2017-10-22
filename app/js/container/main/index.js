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
  Platform,
  BackHandler,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import OrientationLoadingOveraly from 'react-native-orientation-loading-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHeight, navBarHeight } from '../../styles/commonStyles';
import language from '../../utils/language/language';

import Parent from '../parent';

const background = require('../../../assets/imgs/splash_screen/splash_screen.png');
const button = require('../../../assets/imgs/splash_screen/Button.png');
class Main extends Component {
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

  onLearnMore() {
    Actions.AboutUS({title: 'm_about_us'});
  }

  render() {
    const { currentLanguage } = this.props;

    return (
      <Parent title="main">
        <Image source={ background } style={ styles.background } />
        <View style={ styles.container } >
          <View style={ styles.subContainer }>
            <Text style={styles.title} >MANAGE YOUR INSURANCE PLAN</Text>
            <Text style={styles.subTitle} >ANYTIME, ANYWHERE</Text>
            <View style= { styles.buttonContainer }>
              <TouchableOpacity
                activeOpacity={ .5 }
                onPress={ () => this.onLearnMore() }
              >
                <Image source={ button } style={ styles.btnLearn } resizeMode="cover">
                  <Text style={ styles.textButton }>{language.learnMore[currentLanguage]}</Text>
                </Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Parent>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: navBarHeight + 2,
    left: 0,
    bottom: 0,
    right: 0,
    width: screenWidth,
    height: screenHeight - navBarHeight - 2,
  },
  container: {
    flex: 1,
    height: screenHeight - navBarHeight,
    width: screenWidth,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  subContainer: {
    paddingBottom: 80,
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4C605E',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    backgroundColor: 'transparent',
    fontSize: 20,
    color: '#4C605E',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  btnLearn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  textButton: {
    backgroundColor: 'transparent',
    color: '#fff',
  }
});

export default connect(state => ({
  currentLanguage: state.login.currentLanguage,
}),{ })(Main);