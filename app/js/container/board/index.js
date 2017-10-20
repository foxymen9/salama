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
const board1 = require('../../../assets/imgs/board/1.png');
const board2 = require('../../../assets/imgs/board/2.png');
const board3 = require('../../../assets/imgs/board/3.png');
const board4 = require('../../../assets/imgs/board/4.png');
const board5 = require('../../../assets/imgs/board/5.png');
const board6 = require('../../../assets/imgs/board/6.png');
const board7 = require('../../../assets/imgs/board/7.png');

class Board extends Component {
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

  render() {
    const { currentLanguage, title } = this.props;

    return (
      <Parent title={title}>
        <Image source={ background } style={ styles.background } />
        <KeyboardAwareScrollView>
          <View style={ styles.container } >
            {currentLanguage == 'EN' ?
            <View style={ styles.subContainer }>
              <Text style={styles.subTitle}>
                These are the pioneers and founders of our great Salama company. 
                With their support and guidance we have exceled to the highest level in our history since 1980.
              </Text>
              <View style={styles.content}>
                <View style={styles.avatarContentFirst}>
                  <Image source={ board1 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>DR. SALEH MALAIKAH</Text>
                  <Text style={styles.subTitle}>Board Chairman</Text>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.avatarContent}>
                  <Image source={ board2 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>DR. MURYA HABBASH</Text>
                  <Text style={styles.subTitle}>Board member</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board3 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>MR. AHMED AL-SHETAIFI</Text>
                  <Text style={styles.subTitle}>Board member</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board4 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>MR. HUSSEIN BAYARI</Text>
                  <Text style={styles.subTitle}>Board member</Text>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.avatarContent}>
                  <Image source={ board5 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>MR. MARWAN ALGHURAIR</Text>
                  <Text style={styles.subTitle}>Board member</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board6 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>MR. RASHID AL SUWAIKET</Text>
                  <Text style={styles.subTitle}>Board member</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board7 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>MR. LOAY HAMZA BASRAWI</Text>
                  <Text style={styles.subTitle}>Board member</Text>
                </View>
              </View>
            </View>
            :<View style={ styles.subContainer }>
              <Text style={styles.subTitle}>
                إنهم المبادرون الذين أسسوا هذه الشركة ، بدعمهم وقيادتهم تمكنا من الصعود إلى أعلى المراتب منذ تأسيس مجموعة سلامة عام ١٩٨٠
              </Text>
              <View style={styles.content}>
                <View style={styles.avatarContentFirst}>
                  <Image source={ board1 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>د. صالح ملائكة</Text>
                  <Text style={styles.subTitle}>رئيس مجلس الإدارة</Text>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.avatarContent}>
                  <Image source={ board4 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>حسين بياري</Text>
                  <Text style={styles.subTitle}>عضو مجلس الإدارة</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board3 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>احمد الشتيفي</Text>
                  <Text style={styles.subTitle}>عضو مجلس الإدارة</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board2 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>د. مريع هباش</Text>
                  <Text style={styles.subTitle}>عضو مجلس الإدارة</Text>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.avatarContent}>
                  <Image source={ board7 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>لؤي بصرواي</Text>
                  <Text style={styles.subTitle}>عضو مجلس الإدارة</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board6 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>راشد السويكت</Text>
                  <Text style={styles.subTitle}>عضو مجلس الإدارة</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board5 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>مروان الغرير</Text>
                  <Text style={styles.subTitle}>عضو مجلس الإدارة</Text>
                </View>
              </View>
            </View>}
          </View>
        </KeyboardAwareScrollView>
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
    // height: screenHeight - navBarHeight,
    width: screenWidth,
    padding: 30,
  },
  subContainer: {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  avatarContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: (screenWidth - 60)/3,
    paddingHorizontal: 10,
  },
  avatarContentFirst: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
  },
  avatar: {
    width: '100%',
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#0D5D66',
  },
  subTitle: {
    backgroundColor: 'transparent',
    fontSize: 11,
    color: '#333',
    textAlign: 'center',
  },
});

export default connect(state => ({
  currentLanguage: state.login.currentLanguage,
}),{ })(Board);