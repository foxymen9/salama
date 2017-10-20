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
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// import CheckBox from 'react-native-checkbox-heaven';
import CheckBox from 'react-native-check-box'
import Spinner from 'react-native-loading-spinner-overlay';
import OrientationLoadingOveraly from 'react-native-orientation-loading-overlay';
import Video from 'react-native-video';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as commonColors from '../../../styles/commonColors';
import { screenWidth, screenHeight } from '../../../styles/commonStyles';
import { userLogin, changeLanguage, resetData } from './actions';
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
const arrow = require('../../../../assets/imgs/login/arrow.png');
const arrow_ar = require('../../../../assets/imgs/login/arrow_ar.png');

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      bShowConfirmPassword: true,
      rememberMe: false,
      loading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { loading, loginResult } = nextProps;
    this.setState({loading: loading});

    if (loginResult) {
      if (loginResult.ResponseCode == '109') {
        Alert.alert("SUCCESS", "Successfully registered");
        // Actions.Main();
      }
      else {
        if (loginResult.ResponseCode == '604') {
          Alert.alert("Error", loginResult.ResponseMessage);
        }
        else {
          Alert.alert("Error", "Failed. Try again");
        }
        this.props.resetData();
      }
    }
  }

  onLogin() {

    Keyboard.dismiss();

    const {username, password} = this.state;

    if (username == '') {
      Alert.alert('Please enter your username.');
      return;
    }

    if (password == '') {
      Alert.alert('Please enter your password.');
      return;
    }

    const loginData = {
      header: {
        DeviceId: "",
        Platform: "",
        Token: ""
      },
      data: {
        Username: username,
        Password: password,
      }
    }

    this.props.userLogin(loginData);
  }

  onGoToWeb() {
    Linking.openURL("https://www.salama.com.sa");
  }

  onForgotPassword() {
    alert("onForgotPassword");
  }

  onRememberMe() {
    this.setState({rememberMe: !this.state.rememberMe});
  }

  onSkip() {
    Actions.Main();
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
        <Video
          source={ backvideo }
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode={"cover"}
          repeat
          style={styles.video}
        />
        <View style={styles.scrollContainer}>
        <KeyboardAwareScrollView>
          <View style={styles.scrollSubContainer}>
            <View style={ styles.descriptionContainer }>
              <Image source={ logo } style={ styles.logo } resizeMode="contain"/>
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
                  value={ this.state.username }
                  onChangeText={ (text) => this.setState({ username: text }) }
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
            </View>
            {currentLanguage == "EN" ?
            <View style={ styles.ForgotPasswordContainer }>
              <CheckBox 
                  style={{flex: 1}}
                  rightTextStyle={{fontSize: 12}}
                  onClick={ ()=>this.onRememberMe() } 
                  isChecked={ this.state.rememberMe } 
                  rightText={language.rememberMe[currentLanguage]}
                />
              <TouchableOpacity
                activeOpacity={ .5 }
                onPress={ () => this.onForgotPassword() }
              >
                <Text style={ styles.textForgotPassword }>{language.forgotPassword[currentLanguage]}</Text>
              </TouchableOpacity>
            </View>
            :
            <View style={ styles.ForgotPasswordContainer }>
              <TouchableOpacity
                activeOpacity={ .5 }
                onPress={ () => this.onForgotPassword() }
              >
                <Text style={ styles.textForgotPassword }>{language.forgotPassword[currentLanguage]}</Text>
              </TouchableOpacity>
              <CheckBox 
                style={{flex: 1}}
                rightTextStyle={{fontSize: 12, paddingRight: 10}}
                onClick={ ()=>this.onRememberMe() } 
                isChecked={ this.state.rememberMe } 
                leftText={language.rememberMe[currentLanguage]}
              />
            </View>
            }
            <View style={ styles.loginButtonWrapper }> 
              <TouchableOpacity
                activeOpacity={ .5 }
                onPress={ () => this.onLogin() }
              >
                <Image source={ login } style={ styles.buttonLogin } resizeMode="contain">
                  <Text style={ styles.textButton }>{language.login[currentLanguage]}</Text>
                </Image>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={ .5 }
                onPress={ () => this.onSignUp() }
              >
                <Image source={ signup } style={ styles.buttonLogin } resizeMode="contain">
                  <Text style={ styles.textButton }>{language.signup[currentLanguage]}</Text>
                </Image>
              </TouchableOpacity>
            </View>
            <View style={ styles.skipContainer }>
              <TouchableOpacity
                activeOpacity={ .5 }
                onPress={ () => this.onSkip() }
              >
                {currentLanguage == "EN" ?
                <View style={ styles.skipWrapper}>
                  <Text style={ styles.textButton }>{language.skip[currentLanguage]}</Text>
                  <Image source={ arrow } style={ styles.skipArrow } resizeMode="cover" />
                </View>
                : <View style={ styles.skipWrapper}>
                  <Image source={ arrow_ar } style={ styles.skipArrow_ar } resizeMode="cover" />
                  <Text style={ styles.textButton }>{language.skip[currentLanguage]}</Text>
                </View>}
              </TouchableOpacity>
            </View>
            <View style={ styles.switchContainer }>
              <TouchableOpacity
                activeOpacity={ .5 }
                onPress={ (language) => this.onChangeLanguage('EN') }
              >
                <Image source={ currentLanguage == 'EN' ? login : signup } style={ styles.switchENG } resizeMode="cover">
                  <Text style={ styles.textButton }>{currentLanguage == 'EN' ? 'EN' : 'العربية'}</Text>
                </Image>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={ .5 }
                onPress={ (language) => this.onChangeLanguage('AR') }
              >
                <Image source={ currentLanguage == 'EN' ? signup : login } style={ styles.switchAR } resizeMode="cover">
                  <Text style={ styles.textButton }>{currentLanguage == 'EN' ? 'AR' : 'اللغة'}</Text>
                </Image>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight,
    justifyContent: 'space-between',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  scrollContainer: {
    height: screenHeight - 40,
  },
  scrollSubContainer: {
    justifyContent: 'space-between',
  },

  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: screenWidth * 0.5,
    marginVertical: 20,
  },

  inputContainer: {
    width: screenWidth,
    paddingHorizontal: screenWidth * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 12,
    color: commonColors.title,
    height: 45,
    alignSelf: 'stretch',
    marginLeft: 40,
  },
  input_ar: {
    fontSize: 12,
    color: commonColors.title,
    height: 45,
    alignSelf: 'stretch',
    marginRight: 40,
  },
  
  ForgotPasswordContainer: {
    flexDirection: 'row',
    width: screenWidth,
    paddingHorizontal: screenWidth * 0.1,
    justifyContent: 'space-between',
    marginVertical: 15,
  },

  textForgotPasswordAr: {
    color: commonColors.placeholderText,
    fontSize: 12,
    fontStyle: 'italic',
    backgroundColor: 'transparent',
    textAlign: 'right',
    marginTop: 5,
    marginRight: 10,
  },
  textForgotPassword: {
    color: commonColors.placeholderText,
    fontSize: 12,
    fontStyle: 'italic',
    backgroundColor: 'transparent',
    textAlign: 'right',
    marginTop: 5,
  },

  loginButtonWrapper: {
    alignItems: 'center',
    width: screenWidth,
    paddingHorizontal: screenWidth * 0.1,
  },
  buttonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  skipContainer: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  skipWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skipArrow: {
    height: 15,
    width: 15,
    marginLeft: 5,
  },
  skipArrow_ar: {
    height: 15,
    width: 15,
    marginRight: 5,
  },

  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
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
  loading: state.login.loading,
  loginResult: state.login.data,

  currentLanguage: state.login.currentLanguage,
}),{ userLogin, changeLanguage, resetData })(Login);