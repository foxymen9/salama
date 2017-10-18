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
const subbackground = require('../../../assets/imgs/mission_vission/mission_vission.png');

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
            {currentLanguage == 'EN'?
            <View style={ styles.subContainer }>
              <View style={styles.content}>
                <Text style={styles.title} >VISION</Text>
                <Text style={styles.subTitle} >
                  To achieve global leadership in the cooperative insurance industry in market share and shareholders’ equity.
                </Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.title} >MISSION</Text>
                <Text style={styles.subTitle} >
                  To be the leading provider of innovative and customized insurance solutions backed by solid financial and human resources.
                </Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.title} >VALUES</Text>
                <View style={styles.subTitleItems} >
                  <Text style={styles.subTitle} >
                    To achieve global leadership in the cooperative insurance industry in the following areas : 
                  </Text>
                  <Text style={styles.subTitle} >• Market share</Text>
                  <Text style={styles.subTitle} >• Shareholders’ equity </Text>
                  <Text style={styles.subTitle} >• Honest relations & trustworthy management </Text>
                  <Text style={styles.subTitle} >• Dynamic, disciplined and outstanding performance </Text>
                  <Text style={styles.subTitle} >• Transparency & Commitment to responsibilities </Text>
                  <Text style={styles.subTitle} >• Exceeding Clients Expectations </Text>
                  <Text style={styles.subTitle} >• Reporting Healthy Returns</Text>
                </View>
              </View>
            </View>
            :<View style={ styles.subContainer }>
              <View style={styles.content}>
                <Text style={styles.title_ar} >الرؤية</Text>
                <View style={styles.subTitleItems} >
                  <Text style={styles.subTitle_ar} >
                    تحقيق الريادة العالمية في صناعة التأمين التعاوني من حيث :
                  </Text>
                  <Text style={styles.subTitle_ar} >
                    •	الحصة السوقية
                  </Text>
                  <Text style={styles.subTitle_ar} >
                    •	عوائد المساهمين
                  </Text>
                </View>
              </View>
              <View style={styles.content}>
                <Text style={styles.title_ar} >الرسالة</Text>
                <Text style={styles.subTitle_ar} >
                  لنكون الجهة الرائدة في تقديم حلول تأمينية مبتكرة ومتخصصة تستند على موارد مالية وبشرية قوية
                </Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.title_ar} >القيم</Text>
                <View style={styles.subTitleItems} >
                  <Text style={styles.subTitle_ar} >
                    لتحقيق القيادة العالمية في صناعة التأمين التعاوني من حيث : 
                  </Text>
                  <Text style={styles.subTitle_ar} >•	شراكة نزيهة وإدارة جديرة بالثقة</Text>
                  <Text style={styles.subTitle_ar} >•	شراكة نزيهة وإدارة جديرة بالثقة</Text>
                  <Text style={styles.subTitle_ar} >•	الشفافية والالتزام بالمسؤوليات </Text>
                  <Text style={styles.subTitle_ar} >•	تجاوز التوقعات </Text>
                  <Text style={styles.subTitle_ar} >•	تحقيق عوائد مجزية </Text>
                  <Text style={styles.subTitle_ar} >•	تجاوز التوقعات</Text>
                  <Text style={styles.subTitle_ar} >•	تحقيق عوائد مجزية</Text>
                </View>
              </View>
            </View>}
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
  title_ar: {
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#333',
    marginBottom: 5,
  },
  subTitleItems: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
  },
  subTitle: {
    backgroundColor: 'transparent',
    fontSize: 13,
    color: '#333',
    textAlign: 'left',
  },
  subTitle_ar: {
    backgroundColor: 'transparent',
    fontSize: 13,
    color: '#333',
    textAlign: 'right',
  },
});

export default connect(state => ({
  currentLanguage: state.login.currentLanguage,
}),{ })(MissionVission);