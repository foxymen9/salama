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
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import CheckBox from 'react-native-checkbox-heaven';
import Spinner from 'react-native-loading-spinner-overlay';
import timer from 'react-native-timer';
import Video from 'react-native-video';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as commonColors from '../../../styles/commonColors';
import { screenWidth, screenHiehgt } from '../../../styles/commonStyles';
import { logIn, changeLanguage } from '../actions';
import language from '../../../utils/language/language';

const background = require('../../../../assets/imgs/bg.gif');
const logo = require('../../../../assets/imgs/logo.png');
const login = require('../../../../assets/imgs/log.png');
const signup = require('../../../../assets/imgs/signin.png');
const username = require('../../../../assets/imgs/user.png');
const password = require('../../../../assets/imgs/password.png');
const username_ar = require('../../../../assets/imgs/user_ar.png');
const password_ar = require('../../../../assets/imgs/password_ar.png');
const web = require('../../../../assets/imgs/gotoweb.png');
const backvideo = require('../../../../assets/videos/background.mp4');


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      bShowConfirmPassword: true,
      loggingIn: false,
      rememberMe: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { loginStatus } = nextProps;
  }

  onLogin() {

    Keyboard.dismiss();

    const {email, password} = this.state;

    if (email == '') {
      Alert.alert('Please enter your email address.');
      return;
    }

    if (password == '') {
      Alert.alert('Please enter your password.');
      return;
    }

    this.setState({ loggingIn: true });
    this.props.logIn({ email: email, password: password });
  }

  onGoToWeb() {
    alert("onGoToWeb");
  }

  onForgotPassword() {
    alert("onForgotPassword");
  }

  onRememberMe() {
    this.setState({rememberMe: !this.state.rememberMe});
  }

  onSignUp() {
    Keyboard.dismiss();
    Actions.Signup();
  }

  onToggleConfirmPassword() {
    this.setState({ bShowConfirmPassword: !this.state.bShowConfirmPassword });
  }

  onChangeLanguage(lang) {
    this.props.changeLanguage(lang);
  }

  render() {
    const { currentLanguage } = this.props;

    return (
      <View style={ styles.container } >
        <Spinner visible={ this.state.loggingIn }/>
        <Video
          source={ backvideo }
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode={"cover"}
          repeat
          style={styles.video}
        />
        <KeyboardAwareScrollView>
          <View style={ styles.container } >
            <View style={ styles.descriptionContainer }>
              <Image source={ logo } style={ styles.logo } resizeMode="center"/>
            </View>
            <View style= { styles.inputContainer }>
                <Image source={ currentLanguage == "EN" ? username : username_ar } style={ styles.buttonLogin } resizeMode="contain">
                  <TextInput
                    ref="username"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={language.username[currentLanguage]}
                    placeholderTextColor={ commonColors.placeholderText }
                    textAlign={currentLanguage=="EN" ? "left" : "right" }
                    style={ currentLanguage == "EN" ? styles.input  : styles.input_ar }
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    value={ this.state.email }
                    onChangeText={ (text) => this.setState({ email: text }) }
                    onSubmitEditing={ () => this.refs.password.focus() }
                  />
                </Image>
                <Image source={ currentLanguage == "EN" ? password : password_ar } style={ styles.buttonLogin } resizeMode="contain">
                  <TextInput
                    ref="password"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={language.password[currentLanguage]}
                    secureTextEntry={ this.state.bShowConfirmPassword }
                    placeholderTextColor={ commonColors.placeholderText }
                    textAlign={currentLanguage=="EN" ? "left" : "right" }
                    style={ currentLanguage == "EN" ? styles.input  : styles.input_ar }
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'go' }
                    value={ this.state.password }
                    onChangeText={ (text) => this.setState({ password: text }) }
                    onSubmitEditing={ () => this.onLogin() }
                  />
                </Image>
              {currentLanguage == "EN" ?
              <View style={ styles.textWrapper }>
                <CheckBox 
                  style={ styles.checkboxRememberMe } 
                  onChange={ ()=>this.onRememberMe() } 
                  checked={ this.state.rememberMe } 
                  label={language.rememberMe[currentLanguage]}
                  labelStyle={ styles.textRememberMe } 
                  iconSize={20}
                  iconName="matMix"
                />
                <TouchableOpacity
                  activeOpacity={ .5 }
                  onPress={ () => this.onForgotPassword() }
                >
                  <Text style={ styles.textForgotPassword }>{language.forgotPassword[currentLanguage]}</Text>
                </TouchableOpacity>
              </View>
              :
              <View style={ styles.textWrapper }>
                <TouchableOpacity
                  activeOpacity={ .5 }
                  onPress={ () => this.onForgotPassword() }
                >
                  <Text style={ styles.textForgotPassword }>{language.forgotPassword[currentLanguage]}</Text>
                </TouchableOpacity>
                <View style={ styles.rememberWrapper }>
                  <TouchableOpacity
                    activeOpacity={ .5 }
                    onPress={ ()=>this.onRememberMe() } 
                  >
                    <Text style={ styles.textForgotPasswordAr }>{language.rememberMe[currentLanguage]}</Text>
                  </TouchableOpacity>
                  <CheckBox 
                    style={ styles.checkboxRememberMe } 
                    onChange={ ()=>this.onRememberMe() } 
                    checked={ this.state.rememberMe } 
                    labelStyle={ styles.textRememberMe } 
                    iconSize={20}
                    iconName="matMix"
                  />
                </View>
              </View>
              }
              <TouchableOpacity
                activeOpacity={ .5 }
                onPress={ () => this.onLogin() }
              >
                <Image source={ login } style={ styles.buttonLogin } resizeMode="cover">
                  <Text style={ styles.textButton }>{language.login[currentLanguage]}</Text>
                </Image>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={ .5 }
                style={ styles.loginButtonWrapper }
                onPress={ () => this.onSignUp() }
              >
                <Image source={ signup } style={ styles.buttonLogin } resizeMode="cover">
                  <Text style={ styles.textButton }>{language.signup[currentLanguage]}</Text>
                </Image>
              </TouchableOpacity>
              
            </View>
            <View style={ styles.switchContainer }>
              <TouchableOpacity
                activeOpacity={ .5 }
                onPress={ (language) => this.onChangeLanguage('EN') }
              >
                <Image source={ signup } style={ styles.switchENG } resizeMode="cover">
                  <Text style={ styles.textButton }>ENG</Text>
                </Image>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={ .5 }
                onPress={ (language) => this.onChangeLanguage('AR') }
              >
                <Image source={ login } style={ styles.switchAR } resizeMode="cover">
                  <Text style={ styles.textButton }>AR</Text>
                </Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={ styles.bottomContainer }>
            <TouchableOpacity
              activeOpacity={ .5 }
              onPress={ () => this.onGoToWeb() }
            >
              <Image source={ web } style={ styles.buttonWeb } resizeMode="cover">
                <Text style={ styles.textButton }>{language.gotoMainWebsite[currentLanguage]}</Text>
              </Image>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHiehgt,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.5,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 12,
    color: commonColors.title,
    height: 45,
    alignSelf: 'stretch',
    marginLeft: 45,
  },
  input_ar: {
    fontSize: 12,
    color: commonColors.title,
    height: 45,
    alignSelf: 'stretch',
    marginRight: 45,
  },
  loginButtonWrapper: {
    marginTop: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  textWrapper: {
    marginTop: 16,
    marginBottom: 16,
    flexDirection: 'row',
    width: screenWidth * 0.8,
    justifyContent: 'space-between',
  },
  buttonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    height: 40,
    width: screenWidth * 0.8,
  },
  rememberWrapper: {
    flexDirection: 'row',
  },
  checkboxRememberMe: {
    backgroundColor: 'transparent',
  },
  textRememberMe: {
    color: commonColors.placeholderText,
    fontSize: 12,
    marginLeft: 10,
  },
  textForgotPasswordAr: {
    color: commonColors.placeholderText,
    fontSize: 12,
    fontStyle: 'italic',
    backgroundColor: 'transparent',
    textAlign: 'right',
    marginTop: 3,
    marginRight: 10,
  },
  textForgotPassword: {
    color: commonColors.placeholderText,
    fontSize: 12,
    fontStyle: 'italic',
    backgroundColor: 'transparent',
    textAlign: 'right',
    marginTop: 3,
  },
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  switchENG: {
    width: screenWidth * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  switchAR: {
    width: screenWidth * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  bottomContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-start',
    bottom: 0,
  },
  buttonWeb: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: screenWidth,
  },
  textButton: {
    color: '#fff',
    // fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: 'transparent',
  },
});

export default connect(state => ({
  loginStatus: state.auth.loginStatus,
  currentLanguage: state.auth.currentLanguage,
}),{ logIn, changeLanguage })(Login);