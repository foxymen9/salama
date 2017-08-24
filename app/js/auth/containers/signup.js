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
} from 'react-native';

import { bindActionCreators } from 'redux';
import * as signupActions from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Spinner from 'react-native-loading-spinner-overlay';
import timer from 'react-native-timer';
import Video from 'react-native-video';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHiehgt } from '../../styles/commonStyles';

import bendService from '../../bend/bendService'
// import UtilService from '../../components/util'

const background = require('../../../assets/imgs/bg.gif');
const logo = require('../../../assets/imgs/logo.png');
const create = require('../../../assets/imgs/log.png');
const signup = require('../../../assets/imgs/signin.png');
const username = require('../../../assets/imgs/user.png');
const email = require('../../../assets/imgs/mail.png');
const mobilenumber = require('../../../assets/imgs/phone.png');
const fullname = require('../../../assets/imgs/user.png');
const password = require('../../../assets/imgs/password.png');
const back = require('../../../assets/imgs/back.png');
const backvideo = require('../../../assets/videos/background.mp4');

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      mobilenumber: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      communityCode: '',
      bShowConfirmPassword: true,
      signingUp: false,
    };
  }

  onSignUp() {

    Keyboard.dismiss();

    if (this.state.email == '') {
      Alert.alert('E-mail Required', 'Please enter your email address.');
      return;
    }

    if (this.state.password == '') {
      Alert.alert('Password Required', 'Please enter and confirm your password.');
      return;
    }

    if (this.state.communityCode == '') {
      Alert.alert('Community Code Required', 'Please enter your Community Code. Contact us if you need assistance.');
      return;
    }

    this.setState({ signingUp: true });

    // bendService.signup({
    //   username:this.state.email,
    //   password:this.state.password,
    //   confirmPassword:this.state.confirmPassword,
    //   code:this.state.communityCode,
    //   defaultAvatar:UtilService.getRandomDefaultAvatar()
    // }, (error, user)=>{

    //   this.setState({ signingUp: false });

    //   if (error) {
    //     timer.setTimeout( this, 'SignupFailed', () => {
    //       timer.clearInterval(this, 'SignupFailed');
    //       if (error.name.code == 'milkcrate-app.error.common.missingInput') {
    //         alert("Please fill in all the required fields");
    //       } else if (error.name.code == 'milkcrate-app.error.signup.invalidateEmailFormat') {
    //         alert("Please enter a valid email address")
    //       } else if (error.name.code == 'milkcrate-app.error.signup.passwordDismatch') {
    //         alert("Your password and confirmation did not match. Please check them and try again.")
    //       } else if (error.name.code == 'milkcrate-app.error.signup.invalidCode') {
    //         alert("Please enter a valid community code")
    //       } else if (error.name.code == 'milkcrate-app.error.signup.invalidUsername') {
    //         alert("This email address is already taken. Please sign in instead.")
    //       } else if (error.name.code == 'milkcrate-app.error.common.unknown') {
    //         alert("Something's Awry. Please try again later.")
    //       }
    //     }, 200);

    //     return;
    //   }

    //   Actions.SetupProfile();
    // })
  }

  onAcceptTerms() {
  }

  onBack() {
    Actions.Login();
  }

  render() {
    return (
      <View style={ styles.container }>
        <Spinner visible={ this.state.signingUp }/>
        <Video
          source={ backvideo }
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode={"cover"}
          repeat
          style={styles.video}
        />
        
        <TouchableOpacity activeOpacity={ .5 } onPress={ () => this.onBack() }>
          <View style={ styles.backContainer }>
            <Image source={ back } style={ styles.backButton } resizeMode="center"/>
            <Text style={ styles.textBack }>Back</Text>
          </View>
        </TouchableOpacity>
        <View style={ styles.descriptionContainer }>
          <Image source={ logo } style={ styles.logo } resizeMode="center"/>
        </View>
        <View style={ styles.keyboardContainer }>
          <View style={ styles.inputContainer }>
            <KeyboardAwareScrollView>
            <View style={ styles.inputWrapper }>
              <Image source={ fullname } style={ styles.buttonLogin } resizeMode="contain">
                <TextInput
                  ref="fullname"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  placeholder="Full name"
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="left"
                  style={ styles.input }
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  value={ this.state.fullname }
                  onChangeText={ (text) => this.setState({ fullname: text }) }
                  onSubmitEditing={ () => this.refs.mobilenumber.focus() }
                />
              </Image>
            </View>
            <View style={ styles.inputWrapper }>
              <Image source={ mobilenumber } style={ styles.buttonLogin } resizeMode="contain">
                <TextInput
                  ref="mobilenumber"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  placeholder="Mobile number"
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="left"
                  style={ styles.input }
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  value={ this.state.email }
                  keyboardType="phone-pad"
                  onChangeText={ (text) => this.setState({ mobilenumber: text }) }
                  onSubmitEditing={ () => this.refs.email.focus() }
                />
              </Image>
            </View>
            <View style={ styles.inputWrapper }>
              <Image source={ email } style={ styles.buttonLogin } resizeMode="contain">
                <TextInput
                  ref="email"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  placeholder="Email"
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="left"
                  style={ styles.input }
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="email-address"
                  value={ this.state.email }
                  onChangeText={ (text) => this.setState({ email: text }) }
                  onSubmitEditing={ () => this.refs.username.focus() }
                />
              </Image>
            </View>
            <View style={ styles.inputWrapper }>
              <Image source={ username } style={ styles.buttonLogin } resizeMode="contain">
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
                  onChangeText={ (text) => this.setState({ username: text }) }
                  onSubmitEditing={ () => this.refs.password.focus() }
                />
              </Image>
            </View>
            <View style={ styles.inputWrapper }>
              <Image source={ password } style={ styles.buttonLogin } resizeMode="contain">
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
                  returnKeyType={ 'next' }
                  value={ this.state.password }
                  onChangeText={ (text) => this.setState({ password: text }) }
                  onSubmitEditing={ () => this.refs.confirmPassword.focus() }
                />
              </Image>
            </View>
            <View style={ styles.inputWrapper }>
              <Image source={ password } style={ styles.buttonLogin } resizeMode="contain">
                <TextInput
                  ref="confirmPassword"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  placeholder="Confirm Password"
                  secureTextEntry={ this.state.bShowConfirmPassword }
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="left"
                  style={ styles.input }
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  value={ this.state.confirmPassword }
                  onSubmitEditing={ () => this.refs.communityCode.focus() }
                  onChangeText={ (text) => this.setState({ confirmPassword: text }) }
                />
              </Image>
            </View>
            </KeyboardAwareScrollView>
          </View>
        </View>
        <View style={ styles.bottomContainer }>
          <View style={ styles.bottomContentWrap }>
            <TouchableOpacity activeOpacity={ .5 } onPress={ () => this.onAcceptTerms() }>
              <Text style={ styles.textUnderButton }>Contact Us.</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={ .5 } onPress={ () => this.onSignUp() }>
            <Image source={ signup } style={ styles.buttonLogin } resizeMode="cover">
              <Text style={ styles.textButton }>Create an account</Text>
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
    actions: bindActionCreators(signupActions, dispatch)
  })
)(Signup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backContainer: {
    position: 'absolute',
    top: 30,
    left: 30,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'red',
  },
  backButton: {
  },
  textBack: {
    marginHorizontal: 10,
    color: '#fff',
    // fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: 'transparent',
  },
  keyboardContainer: {
    flex: 3,
    width: screenWidth,
    height: screenHiehgt,
  },
  background: {
    width: screenWidth,
    height: screenHiehgt,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  inputContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.5,
    paddingTop: 10,
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
    fontFamily: 'Blanch',
    fontSize: 48,
    backgroundColor: 'transparent',
  },
  textDescription: {
    color: commonColors.title,
    fontFamily: 'OpenSans-Semibold',
    fontSize: 12,
    paddingTop: 5,
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
    alignSelf: 'stretch',
    // marginHorizontal: 40,
    // borderColor: '#fff',
    // backgroundColor: '#fff',
    // borderWidth: 1,
    // borderRadius: 4,
    // marginBottom: 5,
    paddingLeft: 45,
  },
  buttonSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: commonColors.theme,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: commonColors.theme,
    borderStyle: 'solid',
    marginHorizontal: 40,
    height: 40,
  },
  textButton: {
    color: '#fff',
    // fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: 'transparent',
  },
  textUnderButton: {
    color: commonColors.title,
    // fontFamily: 'Open Sans',
    fontSize: 12,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    backgroundColor: 'transparent',
  },
  buttonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    height: 40,
    width: screenWidth * 0.8,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
