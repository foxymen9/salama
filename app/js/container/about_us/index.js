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

const background = require('../../../assets/imgs/about_us/background.png');
const subbackground = require('../../../assets/imgs/about_us/about_us.png');
class AboutUS extends Component {
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
  }

  render() {
    const { currentLanguage, title } = this.props;

    return (
      <Parent title={title}>
        <Image source={ background } style={ styles.background } />
        <View style={ styles.container } >
          <Image source={ subbackground } style={ styles.subbackground } />
          <KeyboardAwareScrollView>
            {currentLanguage == 'EN' ?
            <View style={ styles.subContainer }>
              <View>
                <Text style={styles.subTitle} >
                  Salama Cooperative Insurance Co. “SALAMA”, formerly known as Islamic Arab Insurance Co. 
                  “IAIC”, is a part of SALAMA International Group which is a major player in the MENA region and is backed with SR. 2 Billions Paid Capital.
                </Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.title} >The group is currently operating in:</Text>
                <Text style={styles.subTitle} >
                  - United Arab Emirates
                </Text>
                <Text style={styles.subTitle} >
                  - Kingdom of Saudi Arabia
                </Text>
                <Text style={styles.subTitle} >
                  - Bahrain - Algeria
                </Text>
                <Text style={styles.subTitle} >
                  - Senegal - malaysia
                </Text>
                <Text style={styles.subTitle} >
                  - Egypt
                </Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.subTitle} >
                  We started our Insurance Operations in Saudi Arabia in 1979 and was approved as a Public Listed Company in the Kingdom after the release of the Royal Decree in 2006. 
                  With more than 35 years of experience, SALAMA is considered one of the leading Insurance Companies in the Saudi Market and the whole region.
                </Text>
              </View>
            </View>
            :<View style={ styles.subContainer }>
              <View style={styles.content}>
                <Text style={styles.subTitle_ar} >
                  شركة سلامة للتأمين التعاوني "سلامة -" والمعروفة سابقًا باسم /شركة إياك السعودية للتأمين التعاوني - هي جزء من مجموعة سلامة الدولية، التي تعتبر أحد المجموعات الرائدة في منطقة الشرق الأوسط وشمال أفريقيا في مجال التأمين، حيث يُقدر رأس مال المجموعة بحوالي ٢ مليار ريال سعودي.
                </Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.title_ar} >يمتد نشاط المجموعة ليغطي عدة أسواق في كلٍ من :</Text>
                <Text style={styles.subTitle_ar} >
                  - الإمارات العربية المتحدة
                </Text>
                <Text style={styles.subTitle_ar} >
                  - المملكة العربية السعودية 
                </Text>
                <Text style={styles.subTitle_ar} >
                 - الجزائر - السنغال 
                </Text>
                <Text style={styles.subTitle_ar} >
                 - ماليزيا – البحرين
                </Text>
                <Text style={styles.subTitle_ar} >
                  - مصر
                </Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.subTitle_ar} >
                  وقد بدأت الشركة في تقديم خدماتها التأمينية في المملكة العربية السعودية منذ عام ١٩٧٩ ، وقد تم اعتمادها كشركة مساهمة في المملكة. بموجب مرسوم ملكي في عام ٢٠٠٦ ونظرًا لما تتمتع به من خبرة تمتد لأكثر من ٣٥ عامًا، فإن شركة سلامة تعتبر إحدى شركات التأمين الرائدة في السوق السعودي والمنطقة بالكامل
                </Text>
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
    height: screenHeight * 0.35,
  },
  subContainer: {
    flex: 1,
    width: screenWidth,
    padding: 20,
  },
  content: {
    marginTop: 15,
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#333',
  },
  title_ar: {
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#333',
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
}),{ })(AboutUS);