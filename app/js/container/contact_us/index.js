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

const background = require('../../../assets/imgs/about_us/background.png');
const address_back = require('../../../assets/imgs/contacts/address_field.png');
const email_back = require('../../../assets/imgs/contacts/email_field.png');
const socal_back = require('../../../assets/imgs/contacts/address_field.png');
const facebook = require('../../../assets/imgs/social/facebook.png');
const linkedin = require('../../../assets/imgs/social/linkedin.png');
const twitter = require('../../../assets/imgs/social/twitter.png');

class ContactUS extends Component {
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

  onSocial(index) {
    switch (index) {
      case 0:
        Linking.openURL("https://www.facebook.com/salamainsurance");
        return;
      case 1:
        Linking.openURL("https://www.twitter.com/salamaco");
        return;
      case 2:
        Linking.openURL("https://www.linkedin.com/company-beta/694079");
        return;
      default: 
        return;
    }
  }

  render() {
    const { currentLanguage, title } = this.props;

    return (
      <Parent title={title}>
        <Image source={ background } style={ styles.background } />
        {currentLanguage == 'EN' ?
        <KeyboardAwareScrollView>
          <View style={ styles.container } >
              <View style={ styles.subContainer }>
                <Image source={ address_back } style={ styles.subbackground } resizeMode="contain">
                  <View style={styles.titleContainer}>
                    <Text style={[styles.title, styles.titleAddress]}>Our Address</Text>
                    <Text style={styles.subTitle}>
                      Bin Homran Center, Prince
                      Mohamad Bin Abdul Aziz St. – Office 210A, 207A, 506A, 510A.</Text>
                  </View>
                </Image>
              </View>
              <View style={ styles.subContainer }>
                <Image source={ email_back } style={ styles.subbackground } resizeMode="contain" >
                  <View style={styles.titleContainer}>
                    <Text style={[styles.title, styles.titleEmail]}>Phone & E-mail</Text>
                    <Text style={styles.subTitle}>+966 12 6647877</Text>
                    <Text style={styles.subTitle}>+966 12 6647387</Text>
                    <Text style={styles.subTitle}>info@salama.com.sa</Text>
                  </View>
                </Image>
              </View>
              <View style={ styles.subContainer }>
                <Image source={ address_back } style={ styles.subbackground } resizeMode="contain" >
                  <View style={styles.titleContainer}>
                    <Text style={[styles.title, styles.titleSocial]}>Social</Text>
                    <View style={styles.socialContainer}>
                      <TouchableOpacity
                        activeOpacity={ .5 }
                        onPress={ () => this.onSocial(0) }
                      >
                        <Image source={ facebook } style={ styles.social } resizeMode="contain" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={ .5 }
                        onPress={ () => this.onSocial(1) }
                      >
                        <Image source={ twitter } style={ styles.social } resizeMode="contain" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={ .5 }
                        onPress={ () => this.onSocial(2) }
                      >
                        <Image source={ linkedin } style={ styles.social } resizeMode="contain" />
                      </TouchableOpacity>                    
                    </View>
                  </View>
                </Image>
              </View>
          </View>
        </KeyboardAwareScrollView>
        :<KeyboardAwareScrollView>
          <View style={ styles.container } >
            <View style={ styles.subContainer }>
              <Image source={ address_back } style={ styles.subbackground } resizeMode="contain">
                <View style={styles.titleContainer}>
                  <Text style={[styles.title, styles.titleAddress]}>عنواننا</Text>
                  <Text style={styles.subTitle_ar}>
                    جدة - الإدارة الرئيسية
شارع التحلية - مركز بن حمران الدور الثاني( مكتب رقم A-207) و ( مكتب رقم 210-A )  
                  </Text>
                </View>
              </Image>
            </View>
            <View style={ styles.subContainer }>
              <Image source={ email_back } style={ styles.subbackground } resizeMode="contain" >
                <View style={styles.titleContainer}>
                  <Text style={[styles.title_ar, styles.titleEmail]}>رقم الجوال</Text>
                  <Text style={styles.subTitle_ar}>+966 12 6647877</Text>
                  <Text style={styles.subTitle_ar}>+966 12 6647387</Text>
                  <Text style={styles.subTitle_ar}>info@salama.com.sa</Text>
                </View>
              </Image>
            </View>
            <View style={ styles.subContainer }>
              <Image source={ address_back } style={ styles.subbackground } resizeMode="contain" >
                <View style={styles.titleContainer}>
                  <Text style={[styles.title_ar, styles.titleSocial]}>الشبكة الإجتماعية</Text>
                  <View style={styles.socialContainer}>
                    <TouchableOpacity
                      activeOpacity={ .5 }
                      onPress={ () => this.onSocial(0) }
                    >
                      <Image source={ facebook } style={ styles.social } resizeMode="contain" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={ .5 }
                      onPress={ () => this.onSocial(1) }
                    >
                      <Image source={ twitter } style={ styles.social } resizeMode="contain" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={ .5 }
                      onPress={ () => this.onSocial(2) }
                    >
                      <Image source={ linkedin } style={ styles.social } resizeMode="contain" />
                    </TouchableOpacity>
                  </View>
                </View>
              </Image>
            </View>
          </View>
        </KeyboardAwareScrollView>}
      </Parent>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: navBarHeight,
    left: 0,
    bottom: 0,
    right: 0,
    width: screenWidth,
    height: screenHeight - navBarHeight,
  },
  container: {
    flex: 1,
    width: screenWidth,
    paddingHorizontal: 30,
  },
  subContainer: {
    width: "100%",
    height: 200,
  },
  subbackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 80,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 5,
  },
  title_ar: {
    backgroundColor: 'transparent',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginVertical: 5,
  },
  titleAddress: {
    color: '#0D5D66',
  },
  titleEmail: {
    color: '#777D51',
  },
  titleSocial: {
    color: '#0D5D66',
  },
  subTitle: {
    backgroundColor: 'transparent',
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  subTitle_ar: {
    backgroundColor: 'transparent',
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    width: screenWidth * 0.6,
  },
  social: {
    width: 30,
    height: 30,
  }
});

export default connect(state => ({
  currentLanguage: state.login.currentLanguage,
}),{ })(ContactUS);