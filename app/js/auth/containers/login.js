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
import * as loginActions from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Spinner from 'react-native-loading-spinner-overlay';
import timer from 'react-native-timer';
import Video from 'react-native-video';
import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHiehgt } from '../../styles/commonStyles';
import bendService from '../../bend/bendService';

const background = require('../../../assets/imgs/bg.gif');
const logo = require('../../../assets/imgs/logo.png');
const login = require('../../../assets/imgs/lp-03.png');
const signup = require('../../../assets/imgs/lp-06.png');
const username = require('../../../assets/imgs/l-01.png');
const password = require('../../../assets/imgs/l-02.png');
const web = require('../../../assets/imgs/lp-07.png');
const backvideo = require('../../../assets/videos/background.mp4');


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      bShowConfirmPassword: true,
      loggingIn: false,
    };
  }

  onLogin() {

    Keyboard.dismiss();

    if (this.state.email == '') {
      Alert.alert('Please enter your email address.');
      return;
    }

    if (this.state.password == '') {
      Alert.alert('Please enter your password.');
      return;
    }

    this.setState({ loggingIn: true });

    bendService.login(this.state.email, this.state.password, (error, user)=>{
      
      this.setState({ loggingIn: false });

      if (error || !user.enabled) {

        this.setState({
          password: '',
        });

        timer.setTimeout( this, 'LoginFailed', () => {
          timer.clearInterval(this, 'LoginFailed');
          Alert.alert("Invalid credentials. Please check your email and password and try again.")
        }, 200);

        return
      }

      if (!error) {
        //check community code
        if (!user.name) {
          Actions.SetupProfile();
        } else {
          Actions.Main();
        }
      }
    })
  }

  onGoToWeb() {
    alert("onGoToWeb");
  }

  onForgotPassword() {
    alert("onForgotPassword");
  }

  onRememberMe() {
    alert("onRememberMe");
  }

  onSignUp() {
    Actions.Signup();
  }

  onToggleConfirmPassword() {
    this.setState({ bShowConfirmPassword: !this.state.bShowConfirmPassword });
  }

  render() {
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
        <View style={ styles.descriptionContainer }>
          <Image source={ logo } style={ styles.logo } resizeMode="center"/>
        </View>
        <View style= { styles.inputContainer }>
          <Image source={ username } style={ styles.buttonLogin } resizeMode="cover">
            <TextInput
              ref="username"
              autoCapitalize="none"
              autoCorrect={ false }
              placeholder="Username"
              placeholderTextColor={ commonColors.placeholderText }
              textAlign="left"
              style={ styles.input }
              underlineColorAndroid="transparent"
              returnKeyType={ 'next' }
              value={ this.state.email }
              onChangeText={ (text) => this.setState({ email: text }) }
              onSubmitEditing={ () => this.refs.password.focus() }
            />
          </Image>
          <Image source={ password } style={ styles.buttonLogin } resizeMode="cover">
            <TextInput
              ref="password"
              autoCapitalize="none"
              autoCorrect={ false }
              placeholder="Password"
              secureTextEntry={ this.state.bShowConfirmPassword }
              placeholderTextColor={ commonColors.placeholderText }
              textAlign="left"
              style={ styles.input }
              underlineColorAndroid="transparent"
              returnKeyType={ 'go' }
              value={ this.state.password }
              onChangeText={ (text) => this.setState({ password: text }) }
              onSubmitEditing={ () => this.onLogin() }
            />
          </Image>

          <View style={ styles.textWrapper }>
            <TouchableOpacity
              activeOpacity={ .5 }
              onPress={ () => this.onRememberMe() }
            >
              <Text style={ styles.textRememberMe }>Remember Me</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={ .5 }
              onPress={ () => this.onForgotPassword() }
            >
              <Text style={ styles.textForgotPassword }>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={ .5 }
            onPress={ () => this.onLogin() }
          >
            <Image source={ login } style={ styles.buttonLogin } resizeMode="cover">
              <Text style={ styles.textButton }>Log in</Text>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={ .5 }
            style={ styles.loginButtonWrapper }
            onPress={ () => this.onSignUp() }
          >
            <Image source={ signup } style={ styles.buttonLogin } resizeMode="cover">
              <Text style={ styles.textButton }>Sign up</Text>
            </Image>
          </TouchableOpacity>
          
        </View>
        <View style={ styles.bottomContainer }>
          <TouchableOpacity
            activeOpacity={ .5 }
            style={ styles.bottomButtonWrapper }
            onPress={ () => this.onGoToWeb() }
          >
            <Image source={ web } style={ styles.buttonWeb } resizeMode="cover">
              <Text style={ styles.textButton }>Go to main website</Text>
            </Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(state => ({
  status: state.auth.status
  }),
  (dispatch) => ({
    actions: bindActionCreators(loginActions, dispatch)
  })
)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: screenWidth,
    height: screenHiehgt,
  },
  logo: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.5,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  inputContainer: {
    flex: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  bottomContentWrap: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  textTitle: {
    color: commonColors.title,
    // fontFamily: 'Blanch',
    fontSize: 20,
    backgroundColor: 'transparent',
  },
  textDescription: {
    color: commonColors.title,
    // fontFamily: 'OpenSans-Semibold',
    fontSize: 12,
    paddingTop: 5,
    backgroundColor: 'transparent',
  },
  textInvite: {
    color: commonColors.title,
    // fontFamily: 'Open Sans',
    fontSize: 12,
    paddingVertical: 5,
    backgroundColor: 'transparent',
  },
  inputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  input: {
    fontSize: 12,
    color: commonColors.title,
    height: 45,
    alignSelf: 'stretch',
    // marginHorizontal: 40,
    // borderColor: '#fff',
    // backgroundColor: '#fff',
    // borderWidth: 1,
    // borderRadius: 4,
    // marginBottom: 5,
    paddingLeft: 45,
    marginBottom: 10,
  },
  loginButtonWrapper: {
    marginTop: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginTop: 16,
    alignItems: 'center',
  },
  textWrapper: {
    marginTop: 16,
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
  textTitleButton: {
    color: commonColors.title,
    // fontFamily: 'Open Sans',
    fontSize: 12,
    backgroundColor: 'transparent',
  },
  textRememberMe: {
    color: commonColors.placeholderText,
    fontSize: 12,
    backgroundColor: 'transparent',
    textAlign: 'left',
  },
  textForgotPassword: {
    color: commonColors.placeholderText,
    fontSize: 12,
    backgroundColor: 'transparent',
    textAlign: 'right',
  },
  text: {
    color: commonColors.title,
    // fontFamily: 'Open Sans',
    fontSize: 12,
    backgroundColor: 'transparent',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bottomButtonWrapper: {
    position: 'absolute',
    bottom: 0,
  },
});
