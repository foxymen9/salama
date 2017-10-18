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
const img1 = require('../../../assets/imgs/international/logo1.png');
const img2 = require('../../../assets/imgs/international/logo2.png');
const img3 = require('../../../assets/imgs/international/egyptian.png');
const img4 = require('../../../assets/imgs/international/assurance.png');
const img5 = require('../../../assets/imgs/international/tarriic.png');
const img6 = require('../../../assets/imgs/international/best.png');

class International extends Component {
  constructor(props) {
    super(props);
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
              <View style={styles.content}>
                <View style={styles.avatarContent}>
                  <Image source={ img1 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>Salama Insurance Algerie</Text>
                  <Text style={styles.subTitle}>Cite des P.T.T No. 77, Hydra, Alger, Algeria.</Text>
                  <Text style={styles.subTitle}>Tel: +213 21 480310</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ img2 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>SALAMA – Islamic Arab Insurance Company (UAE)</Text>
                  <Text style={styles.subTitle}>Head Office Dubai Branch </Text>
                  <Text style={styles.subTitle}>4th Floor, Block A, Spectrum Building. </Text>
                  <Text style={styles.subTitle}>Oud Metha, Sheikh Rashid Road, Dubai. U.A.E. P.O. Box: 10214 </Text>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.avatarContent}>
                  <Image source={ img3 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>Salama Insurance Senegal</Text>
                  <Text style={styles.subTitle}>67 , Boulevard de la Republique BP:21 022 Dakar, Senegal.</Text>
                  <Text style={styles.subTitle}>Tel: +221 849 4802</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ img4 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>Egyptian Saudi Insurance Home (ESIH)</Text>
                  <Text style={styles.subTitle}>54, Al Batal Ahmed A. El Aziz Street - Mohandiseen Giza, Egypt</Text>
                  <Text style={styles.subTitle}>Tel: +202 3377 997</Text>
                  <Text style={styles.subTitle}>Fax: +202 7495916</Text>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.avatarContent}>
                  <Image source={ img5 } style={ styles.avatar } resizeMode="contain" />
                 <Text style={styles.title}>Tarric Holding Company B.S.C</Text>
                  <Text style={styles.subTitle}>Apartment 43 – 4th Floor Al-Ahly Building</Text>
                  <Text style={styles.subTitle}>P.O.Box 2948, Manama, Kingdom of Bahrain</Text>
                  <Text style={styles.subTitle}>Tel: +973 1758 3443</Text>
                  <Text style={styles.subTitle}>Fax: +973 1758 3442</Text>
                </View>
                <View style={styles.avatarContent}>
                  <Image source={ img6 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title}>Misr Emirates Takaful Life Insurance Co.</Text>
                  <Text style={styles.subTitle}>Head Office : 17 Amin El Rafee st., Messha Square</Text>
                  <Text style={styles.subTitle}>Dokki , Cairo, Egypt</Text>
                  <Text style={styles.subTitle}>Tel: +202 3333 1660</Text>
                  <Text style={styles.subTitle}>Fax: +202 374 83 373</Text>
                </View>
              </View>
            </View>
            :<View style={ styles.subContainer }>
              <View style={styles.content}>
                <View style={styles.avatarContent_ar}>
                  <Image source={ img1 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title_ar}>تأمين سلامة الجزائر</Text>
                  <Text style={styles.subTitle_ar}>Cite des P.T.T No. 77, Hydra, Alger, Algeria.</Text>
                  <Text style={styles.subTitle_ar}>Tel: +213 21 480310</Text>
                </View>
                <View style={styles.avatarContent_ar}>
                  <Image source={ img2 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title_ar}>شركة التأمين الإسلامي العربي (سلامة – الأمارات)</Text>
                  <Text style={styles.subTitle_ar}>Head Office Dubai Branch </Text>
                  <Text style={styles.subTitle_ar}>4th Floor, Block A, Spectrum Building. </Text>
                  <Text style={styles.subTitle_ar}>Oud Metha, Sheikh Rashid Road, Dubai. U.A.E. P.O. Box: 10214 </Text>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.avatarContent_ar}>
                  <Image source={ img3 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title_ar}>Salama Insurance Senegal</Text>
                  <Text style={styles.subTitle_ar}>67 , Boulevard de la Republique BP:21 022 Dakar, Senegal.</Text>
                  <Text style={styles.subTitle_ar}>Tel: +221 849 4802</Text>
                </View>
                <View style={styles.avatarContent_ar}>
                  <Image source={ img4 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title_ar}>بيت التأمين المصري السعودي</Text>
                  <Text style={styles.subTitle_ar}>54, Al Batal Ahmed A. El Aziz Street - Mohandiseen Giza, Egypt</Text>
                  <Text style={styles.subTitle_ar}>Tel: +202 3377 997</Text>
                  <Text style={styles.subTitle_ar}>Fax: +202 7495916</Text>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.avatarContent_ar}>
                  <Image source={ img5 } style={ styles.avatar } resizeMode="contain" />
                 <Text style={styles.title_ar}>شركة تكافل و إعادة التكافل العالمي الإستثماري</Text>
                  <Text style={styles.subTitle_ar}>Apartment 43 – 4th Floor Al-Ahly Building</Text>
                  <Text style={styles.subTitle_ar}>P.O.Box 2948, Manama, Kingdom of Bahrain</Text>
                  <Text style={styles.subTitle_ar}>Tel: +973 1758 3443</Text>
                  <Text style={styles.subTitle_ar}>Fax: +973 1758 3442</Text>
                </View>
                <View style={styles.avatarContent_ar}>
                  <Image source={ img6 } style={ styles.avatar } resizeMode="contain" />
                  <Text style={styles.title_ar}>Misr Emirates Takaful Life Insurance Co.</Text>
                  <Text style={styles.subTitle_ar}>Head Office : 17 Amin El Rafee st., Messha Square</Text>
                  <Text style={styles.subTitle_ar}>Dokki , Cairo, Egypt</Text>
                  <Text style={styles.subTitle_ar}>Tel: +202 3333 1660</Text>
                  <Text style={styles.subTitle_ar}>Fax: +202 374 83 373</Text>
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
    padding: 20,
  },
  subContainer: {
    width: "100%",
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  avatarContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: (screenWidth - 40)/2,
    paddingHorizontal: 5,
  },
  avatarContent_ar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    width: (screenWidth - 40)/2,
    paddingHorizontal: 5,
  },
  avatar: {
    width: '100%',
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 2,
    color: '#0D5D66',
  },
  title_ar: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 5,
    marginBottom: 2,
    color: '#0D5D66',
  },
  subTitle: {
    backgroundColor: 'transparent',
    fontSize: 11,
    color: '#333',
    textAlign: 'left',
  },
  subTitle_ar: {
    backgroundColor: 'transparent',
    fontSize: 11,
    color: '#333',
    textAlign: 'right',
  },
});

export default connect(state => ({
  currentLanguage: state.login.currentLanguage,
}),{ })(International);