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
const board1 = require('../../../assets/imgs/member/1.png');
const board2 = require('../../../assets/imgs/member/2.png');
const board3 = require('../../../assets/imgs/member/3.png');
const board4 = require('../../../assets/imgs/member/4.png');
const board5 = require('../../../assets/imgs/member/5.png');
const board6 = require('../../../assets/imgs/member/6.png');
const board7 = require('../../../assets/imgs/member/7.png');
const board8 = require('../../../assets/imgs/member/8.png');
const board9 = require('../../../assets/imgs/member/9.png');

class Member extends Component {
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
        <KeyboardAwareScrollView>
          <View style={ styles.container } >
            {currentLanguage == 'EN' ?
            <View style={ styles.subContainer }>
              <Text style={styles.subTitle}>
               The Management team has led our cooperation uniquely in a very competitive market.
              </Text>
              <View style={styles.content}>
                <View style={styles.avatarContentFirst}>
                  <Image source={ board1 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>OMAR AL-AJLANI</Text>
                  <Text style={styles.subTitle}>CEO-Chief Executive Officer</Text>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.avatarContent}>
                  <Image source={ board4 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>AMMAR GHURAB</Text>
                  <Text style={styles.subTitle}>COO-Chief Operational Officer</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board3 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>ASHOOR ZAHR</Text>
                  <Text style={styles.subTitle}>CHO-Chief HR Officer</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board2 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>MOHAMMED WAHABI</Text>
                  <Text style={styles.subTitle}>CCO-Chief Customer Care Officer</Text>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.avatarContent}>
                  <Image source={ board5 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>DR. NOUMAN BANTAN</Text>
                  <Text style={styles.subTitle}>CIO-Chief IT Officer</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board6 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>KHALID AL FEQI</Text>
                  <Text style={styles.subTitle}>CMO-Chief Marketing Officer</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board7 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>ABBAS ALI</Text>
                  <Text style={styles.subTitle}>CFO-Chief Finance Officer</Text>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.avatarContent}>
                  <Image source={ board8 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>HASAN SHUBALI</Text>
                  <Text style={styles.subTitle}>Compliance Manager</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board9 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>SHAKER AL-SEHLY</Text>
                  <Text style={styles.subTitle}>Risk Management Manager</Text>
                </View>
              </View>
            </View>
            :<View style={ styles.subContainer }>
              <Text style={styles.subTitle}>
               لقد قاد الفريق الإداري منظومة التعاون الفريدة في ظل مناخ تنافسي عالي لسوق التأمين
              </Text>
              <View style={styles.content}>
                <View style={styles.avatarContentFirst}>
                  <Image source={ board1 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>عمر العجلاني</Text>
                  <Text style={styles.subTitle}>الرئيس التنفيذي</Text>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.avatarContent}>
                  <Image source={ board2 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>محمد الوهبي</Text>
                  <Text style={styles.subTitle}>رئيس خدمة العملاء</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board3 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>عاشور الزهراني</Text>
                  <Text style={styles.subTitle}>رئيس الموارد البشرية</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board4 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>عمار غراب</Text>
                  <Text style={styles.subTitle}>رئيس العمليات</Text>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.avatarContent}>
                  <Image source={ board7 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>عباس علي</Text>
                  <Text style={styles.subTitle}>رئيس المحاسبة</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board6 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>خالد الفقي</Text>
                  <Text style={styles.subTitle}>رئيس المبيعات</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board5 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>د. نعمان بنتن</Text>
                  <Text style={styles.subTitle}>رئيس تقنية المعلومات</Text>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.avatarContent}>
                  <Image source={ board9 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>شاكر السحلي</Text>
                  <Text style={styles.subTitle}>مدير إدارة المخاطر</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ board8 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>حسن شبيلي</Text>
                  <Text style={styles.subTitle}>مدير إدارة المراجعة</Text>
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
    fontSize: 13,
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
}),{ })(Member);