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

class ContactUS extends Component {
  constructor(props) {
    super(props);
  }

  onLearnMore() {
  }

  render() {
    const { currentLanguage, title } = this.props;

    return (
      <Parent title={title}>
        <Image source={ background } style={ styles.background } />
        {currentLanguage == 'EN' ?
        <View style={ styles.container } >
          <KeyboardAwareScrollView>
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
                  <Text style={styles.subTitle}>FACEBOOK</Text>
                  <Text style={styles.subTitle}>TWITTER</Text>
                  <Text style={styles.subTitle}>LINKEDIN</Text>
                </View>
              </Image>
            </View>
          </KeyboardAwareScrollView>
        </View>
        :<View style={ styles.container } >
          <KeyboardAwareScrollView>
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
                  <Text style={[styles.title_ar, styles.titleSocial]}>اجتماعي</Text>
                  <Text style={styles.subTitle_ar}>FACEBOOK</Text>
                  <Text style={styles.subTitle_ar}>TWITTER</Text>
                  <Text style={styles.subTitle_ar}>LINKEDIN</Text>
                </View>
              </Image>
            </View>
          </KeyboardAwareScrollView>
        </View>}
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
    height: screenHeight - navBarHeight,
    width: screenWidth,
    padding: 30,
  },
  subContainer: {
    width: "100%",
    height: 180,
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
    paddingHorizontal: 20,
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 5,
  },
  title_ar: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 5,
  },
  titleAddress: {
    color: '#0D5D66',
  },
  titleEmail: {
    color: '#777D51',
  },
  titleSocial: {
    color: '#777D51',
  },
  subTitle: {
    backgroundColor: 'transparent',
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  subTitle_ar: {
    backgroundColor: 'transparent',
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default connect(state => ({
  currentLanguage: state.login.currentLanguage,
}),{ })(ContactUS);