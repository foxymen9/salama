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
const motor = require('../../../assets/imgs/claims/motor.png');
const medical = require('../../../assets/imgs/claims/medical.png');
const general = require('../../../assets/imgs/claims/general.png');
const travel = require('../../../assets/imgs/claims/travel.png');
const malpractise = require('../../../assets/imgs/claims/malpractise.png');

class Claims extends Component {
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
        {currentLanguage == "EN" ?
        <View style={ styles.container } >
          <KeyboardAwareScrollView>
            <View style={ styles.subContainer }>
              <Image source={ motor } style={ styles.subbackground } />
              <View style={styles.content}>
                <Text style={styles.title} >MOTOR CLAIM</Text>
                <Text style={styles.subTitle} >
                  Salama Cooperative Insurance Company - is a leading provider of Sharia’h compliant insurance solutions (Takaful).
                </Text>
              </View>
            </View>
            <View style={ styles.subContainer }>
              <Image source={ medical } style={ styles.subbackground } />
              <View style={styles.content}>
                <Text style={styles.title} >MEDICAL CLAIM</Text>
                <Text style={styles.subTitle} >
                  SALAMA offers comprehensive health insurance coverage that complies with Council of Cooperative Health Insurance (CCHI) requirements. 
                  This service is offered through a network of approved healthcare providers who have high standard.
                </Text>
              </View>
            </View>

            <View style={ styles.subContainer }>
              <Image source={ general } style={ styles.subbackground } />
              <View style={styles.content}>
                <Text style={styles.title} >GENERAL CLAIM</Text>
                <Text style={styles.subTitle} >
                  SALAMA is a leading provider of Sharia compliant General Insurance Products with a portfolio of more than 25 Property & Casualty Products.
                </Text>
              </View>
            </View>
            <View style={ styles.subContainer }>
              <Image source={ travel } style={ styles.subbackground } />
              <View style={styles.content}>
                <Text style={styles.title} >TRAVEL CLAIM</Text>
                <Text style={styles.subTitle} >
                  SALAMA Travel Care Insurance provides comprehensive travel insurance coverage to our valued corporate and individual clients on their overseas trips.
                </Text>
              </View>
            </View>
            <View style={ styles.subContainer }>
              <Image source={ malpractise } style={ styles.subbackground } />
              <View style={styles.content}>
                <Text style={styles.title} >MALPRACTICE CLAIM:</Text>
                <Text style={styles.subTitle} >
                  SALAMA offers Comprehensive Malpractice Insurance coverage. Malpractice insurance is mandatory in the kingdom of Saudi Arabia for all registered health practitioners, including (but limited to) physicians, dentists, nurses, therapists, optometrists, emergency medical technicians, surgical and non-surgical paramedical staff, as well as veterinarians.
                </Text>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
        :<View style={ styles.container } >
          <KeyboardAwareScrollView>
            <View style={ styles.subContainer }>
              <Image source={ motor } style={ styles.subbackground } />
              <View style={styles.content}>
                <Text style={styles.title_ar} >MOTOR CLAIM</Text>
                <Text style={styles.subTitle_ar} >
                  Salama Cooperative Insurance Company - is a leading provider of Sharia’h compliant insurance solutions (Takaful).
                </Text>
              </View>
            </View>
            <View style={ styles.subContainer }>
              <Image source={ medical } style={ styles.subbackground } />
              <View style={styles.content}>
                <Text style={styles.title_ar} >MEDICAL CLAIM</Text>
                <Text style={styles.subTitle_ar} >
                  SALAMA offers comprehensive health insurance coverage that complies with Council of Cooperative Health Insurance (CCHI) requirements. 
                  This service is offered through a network of approved healthcare providers who have high standard.
                </Text>
              </View>
            </View>

            <View style={ styles.subContainer }>
              <Image source={ general } style={ styles.subbackground } />
              <View style={styles.content}>
                <Text style={styles.title_ar} >GENERAL CLAIM</Text>
                <Text style={styles.subTitle_ar} >
                  SALAMA is a leading provider of Sharia compliant General Insurance Products with a portfolio of more than 25 Property & Casualty Products.
                </Text>
              </View>
            </View>
            <View style={ styles.subContainer }>
              <Image source={ travel } style={ styles.subbackground } />
              <View style={styles.content}>
                <Text style={styles.title_ar} >TRAVEL CLAIM</Text>
                <Text style={styles.subTitle_ar} >
                  SALAMA Travel Care Insurance provides comprehensive travel insurance coverage to our valued corporate and individual clients on their overseas trips.
                </Text>
              </View>
            </View>
            <View style={ styles.subContainer }>
              <Image source={ malpractise } style={ styles.subbackground } />
              <View style={styles.content}>
                <Text style={styles.title_ar} >MALPRACTICE CLAIM:</Text>
                <Text style={styles.subTitle_ar} >
                  SALAMA offers Comprehensive Malpractice Insurance coverage. Malpractice insurance is mandatory in the kingdom of Saudi Arabia for all registered health practitioners, including (but limited to) physicians, dentists, nurses, therapists, optometrists, emergency medical technicians, surgical and non-surgical paramedical staff, as well as veterinarians.
                </Text>
              </View>
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
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  subContainer: {
    flex: 1,
    width: screenWidth,
  },
  subbackground: {
    width: screenWidth,
    height: 150,
  },
  content: {
    padding: 20,
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#333',
    marginBottom: 15,
  },
  subTitle: {
    backgroundColor: 'transparent',
    fontSize: 13,
    color: '#333',
    textAlign: 'left',
  },
  title_ar: {
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#333',
    marginBottom: 15,
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
}),{ })(Claims);