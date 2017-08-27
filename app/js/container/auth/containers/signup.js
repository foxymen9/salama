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
import CheckBox from 'react-native-checkbox-heaven';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Spinner from 'react-native-loading-spinner-overlay';
import timer from 'react-native-timer';
import Video from 'react-native-video';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as commonColors from '../../../styles/commonColors';
import { screenWidth, screenHiehgt } from '../../../styles/commonStyles';
import * as signUp from '../actions';
import language from '../../../utils/language/language';

const background = require('../../../../assets/imgs/bg.gif');
const logo = require('../../../../assets/imgs/logo.png');
const login = require('../../../../assets/imgs/log.png');
const username = require('../../../../assets/imgs/user.png');
const email = require('../../../../assets/imgs/mail.png');
const mobilenumber = require('../../../../assets/imgs/phone.png');
const fullname = require('../../../../assets/imgs/user.png');
const password = require('../../../../assets/imgs/password.png');
const username_ar = require('../../../../assets/imgs/user.png');
const email_ar = require('../../../../assets/imgs/mail_ar.png');
const mobilenumber_ar = require('../../../../assets/imgs/phone_ar.png');
const fullname_ar = require('../../../../assets/imgs/user_ar.png');
const password_ar = require('../../../../assets/imgs/password_ar.png');
const back = require('../../../../assets/imgs/back.png');
const backvideo = require('../../../../assets/videos/background.mp4');

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
      acceptPolicy: false,
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

    this.setState({ signingUp: true });
  }

  onBack() {
    Actions.Login();
  }

  render() {
    const { currentLanguage } = this.props;

    return (
      <View style={ styles.containers }>
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
        <View style={ styles.container }>
          <View style={ styles.backContainer }>
            <TouchableOpacity style={ styles.backButton } activeOpacity={ .5 } onPress={ () => this.onBack() }>  
              <Image source={ back } resizeMode="center"/>
              <Text style={ styles.backText }>{language.back[currentLanguage]}</Text>
            </TouchableOpacity>
          </View>
          <KeyboardAwareScrollView>
            <View style={ styles.descriptionContainer }>
              <Image source={ logo } style={ styles.logo } resizeMode="center"/>
            </View>
            <View style={ styles.keyboardContainer }>
              <View style={ styles.inputContainer }>
                <View style={ styles.inputWrapper }>
                  <Image source={ currentLanguage == "EN" ? fullname : fullname_ar } style={ styles.textField } resizeMode="contain">
                    <TextInput
                      ref="fullname"
                      autoCapitalize="none"
                      autoCorrect={ false }
                      placeholder={language.fullname[currentLanguage]}
                      placeholderTextColor={ commonColors.placeholderText }
                      textAlign={ currentLanguage=="EN" ? "left" : "right" }
                      style={ currentLanguage == "EN" ? styles.input  : styles.input_ar }
                      underlineColorAndroid="transparent"
                      returnKeyType={ 'next' }
                      value={ this.state.fullname }
                      onChangeText={ (text) => this.setState({ fullname: text }) }
                      onSubmitEditing={ () => this.refs.username.focus() }
                    />
                  </Image>
                </View>
                <View style={ styles.inputWrapper }>
                  <Image source={ currentLanguage == "EN" ? fullname : fullname_ar } style={ styles.textField } resizeMode="contain">
                    <TextInput
                      ref="username"
                      autoCapitalize="none"
                      autoCorrect={ false }
                      placeholder={language.username[currentLanguage]}
                      placeholderTextColor={ commonColors.placeholderText }
                      textAlign={ currentLanguage=="EN" ? "left" : "right" }
                      style={ currentLanguage == "EN" ? styles.input  : styles.input_ar }
                      underlineColorAndroid="transparent"
                      returnKeyType={ 'next' }
                      value={ this.state.username }
                      onChangeText={ (text) => this.setState({ username: text }) }
                      onSubmitEditing={ () => this.refs.mobilenumber.focus() }
                    />
                  </Image>
                </View>
                <View style={ styles.inputWrapper }>
                  <Image source={ currentLanguage == "EN" ? mobilenumber : mobilenumber_ar } style={ styles.textField } resizeMode="contain">
                    <TextInput
                      ref="mobilenumber"
                      autoCapitalize="none"
                      autoCorrect={ false }
                      placeholder={language.mobileNumber[currentLanguage]}
                      placeholderTextColor={ commonColors.placeholderText }
                      textAlign={ currentLanguage=="EN" ? "left" : "right" }
                      style={ currentLanguage == "EN" ? styles.input  : styles.input_ar }
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
                  <Image source={ currentLanguage == "EN" ? email : email_ar } style={ styles.textField } resizeMode="contain">
                    <TextInput
                      ref="email"
                      autoCapitalize="none"
                      autoCorrect={ false }
                      placeholder={language.email[currentLanguage]}
                      placeholderTextColor={ commonColors.placeholderText }
                      textAlign={ currentLanguage=="EN" ? "left" : "right" }
                      style={ currentLanguage == "EN" ? styles.input  : styles.input_ar }
                      underlineColorAndroid="transparent"
                      returnKeyType={ 'next' }
                      keyboardType="email-address"
                      value={ this.state.email }
                      onChangeText={ (text) => this.setState({ email: text }) }
                      onSubmitEditing={ () => this.refs.password.focus() }
                    />
                  </Image>
                </View>
                <View style={ styles.inputWrapper }>
                  <Image source={ currentLanguage == "EN" ? password : password_ar } style={ styles.textField } resizeMode="contain">
                    <TextInput
                      ref="password"
                      autoCapitalize="none"
                      autoCorrect={ false }
                      placeholder={language.password[currentLanguage]}
                      secureTextEntry={ this.state.bShowConfirmPassword }
                      placeholderTextColor={ commonColors.placeholderText }
                      textAlign={ currentLanguage=="EN" ? "left" : "right" }
                      style={ currentLanguage == "EN" ? styles.input  : styles.input_ar }
                      underlineColorAndroid="transparent"
                      returnKeyType={ 'next' }
                      value={ this.state.password }
                      onChangeText={ (text) => this.setState({ password: text }) }
                      onSubmitEditing={ () => this.refs.confirmPassword.focus() }
                    />
                  </Image>
                </View>
                <View style={ styles.inputWrapper }>
                  <Image source={ currentLanguage == "EN" ? password : password_ar } style={ styles.textField } resizeMode="contain">
                    <TextInput
                      ref="confirmPassword"
                      autoCapitalize="none"
                      autoCorrect={ false }
                      placeholder={language.confirmPassword[currentLanguage]}
                      secureTextEntry={ this.state.bShowConfirmPassword }
                      placeholderTextColor={ commonColors.placeholderText }
                      textAlign={ currentLanguage=="EN" ? "left" : "right" }
                      style={ currentLanguage == "EN" ? styles.input  : styles.input_ar }
                      underlineColorAndroid="transparent"
                      returnKeyType={ 'next' }
                      value={ this.state.confirmPassword }
                      onSubmitEditing={ () => Keyboard.dismiss() }
                      onChangeText={ (text) => this.setState({ confirmPassword: text }) }
                    />
                  </Image>
                </View>
                <View style={ styles.textWrapper }>
                  <View style={ styles.policyWrapper }>
                    <CheckBox
                      style={ styles.checkboxPolicy } 
                      onChange={ ()=>this.setState({acceptPolicy: !this.state.acceptPolicy}) } 
                      checked={ this.state.acceptPolicy } 
                      label={language.acceptPolicy[currentLanguage]}
                      labelStyle={ styles.textPolicy } 
                      iconSize={20}
                      iconName="matMix"
                    />
                  </View>
                </View>
              </View>
              <View style= { styles.signupButtonContainer }>
                <TouchableOpacity
                  activeOpacity={ .5 }
                  onPress={ () => this.onSignUp() }
                >
                  <Image source={ login } style={ styles.btnSignup } resizeMode="cover">
                    <Text style={ styles.textButton }>{language.createAccount[currentLanguage]}</Text>
                  </Image>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
  },
  video: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
  },
  backContainer: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  backButton: {
    width: screenWidth * 0.9,
    flexDirection: 'row',
  },
  backArrow: {
  },
  backText: {
    marginLeft: 10,
    marginTop: 2,
    color: '#fff',
    // fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 14,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.5,
  },
  keyboardContainer: {
    width: screenWidth,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft: 45,
  },
  input_ar: {
    fontSize: 12,
    color: commonColors.title,
    height: 45,
    alignSelf: 'stretch',
    marginRight: 45,
  },
  textButton: {
    color: '#fff',
    // fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: 'transparent',
  },
  textField: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
    height: 40,
    width: screenWidth * 0.8,
  },
  textWrapper: {
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  policyWrapper: { 
    width: screenWidth * 0.8,
  },
  checkboxPolicy: {
    backgroundColor: 'transparent',
  },
  textPolicy: {
    color: commonColors.placeholderText,
    fontSize: 12,
    marginLeft: 10,
  },
  signupButtonContainer: {
    alignItems: 'center',
  },
  btnSignup: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: screenWidth * 0.8,
  },
});

export default connect(state => ({
  signupStatus: state.auth.signupStatus,
  currentLanguage: state.auth.currentLanguage,
}),{ signUp })(Signup);