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
const subbackground = require('../../../assets/imgs/about_us/about_us.png');

class MissionVission extends Component {
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
        <View style={ styles.container } >
          <Image source={ subbackground } style={ styles.subbackground } />
          <KeyboardAwareScrollView>
            <View style={ styles.subContainer }>
              <View style={styles.content}>
                <Text style={styles.title} >VISSION</Text>
                <Text style={styles.subTitle} >
                  Salama Cooperative Insurance CO. "SALAMA". formerly known as Islamic Arab Insurance CO. "IAIC". is a part of SALAMA
                  International Group which is a major player in the MENA region and is backed with SR. 2 Billions Paid Capital.
                </Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.title} >MISSION</Text>
                <Text style={styles.subTitle} >
                  Salama Cooperative Insurance CO. "SALAMA". formerly known as Islamic Arab Insurance CO. "IAIC". is a part of SALAMA
                  International Group which is a major player in the MENA region and is backed with SR. 2 Billions Paid Capital.
                </Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.title} >VALUES</Text>
                <Text style={styles.subTitle} >
                  To achieve global leadership in the cooperateive insurance indusry in the following areas:
                  <Text style={styles.subTitle} >- Market share</Text>
                  <Text style={styles.subTitle} >- Market share</Text>
                  <Text style={styles.subTitle} >- Market share</Text>
                  <Text style={styles.subTitle} >- Market share</Text>
                  <Text style={styles.subTitle} >- Market share</Text>
                  <Text style={styles.subTitle} >- Market share</Text>
                </Text>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
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
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  subbackground: {
    width: screenWidth,
    height: 250
  },
  subContainer: {
    flex: 1,
    width: screenWidth,
    padding: 20,
  },
  content: {
    marginBottom: 20,
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#333',
    marginBottom: 5,
  },
  subTitle: {
    backgroundColor: 'transparent',
    fontSize: 13,
    color: '#333',
    textAlign: 'left',
  },
});

export default connect(state => ({
  currentLanguage: state.login.currentLanguage,
}),{ })(MissionVission);