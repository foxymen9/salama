'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    RecyclerViewBackedScrollView,
    TouchableOpacity,
    TouchableHighlight,
    Linking,
    Keyboard,
    AsyncStorage,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import language from '../../utils/language/language';
import { changeLanguage } from '../auth/login/actions';
import { changeMenuState } from '../parent/actions';

import { screenWidth, screenHeight } from '../../styles/commonStyles';
import * as commonColors from '../../styles/commonColors';

const background = require('../../../assets/imgs/background.png');
const arrow_clicked = require('../../../assets/imgs/menu/arrow_clicked.png');
const arrow_unclicked = require('../../../assets/imgs/menu/arrow_unclicked.png');
const i_about_us = require('../../../assets/imgs/menu/info.png');
const i_claims = require('../../../assets/imgs/menu/claims.png');
const i_members = require('../../../assets/imgs/menu/members.png');
const i_board = require('../../../assets/imgs/menu/board.png');
const i_international = require('../../../assets/imgs/menu/international.png');
const i_language = require('../../../assets/imgs/menu/language.png');
const i_contact_us = require('../../../assets/imgs/menu/phone.png');

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  onItemSelect(data, rowID) {
    const {currentLanguage, menuId } = this.props;
    if (rowID == menuId) {
      //Hide menu when select the current page
      this.props.menuState();
      return;
    }
    
    switch (rowID) {
      case "0": //Log out
        Actions.Main();
        return;
      case "1": //ABOUT US
        this.props.changeMenuState(rowID);
        Actions.AboutUS({title: 'm_about_us'});
        return;
      case "2": //MISSION & VISSION
        this.props.changeMenuState(rowID);
        Actions.MissionVission({title: 'm_mission_vission'});
        return;
      case "3": //CLAIMS
      this.props.changeMenuState(rowID);
        Actions.Claim({title: 'm_claims'});
        return;
      case "4": //BOARD OF DIRECTORS
        this.props.changeMenuState(rowID);
        Actions.Board({title: 'm_borard'});
        return;
      case "5": //MEMBERS
        this.props.changeMenuState(rowID);
        Actions.Member({title: 'm_members'});
        return;
      case "6": //INTERNATIONAL WORK
        this.props.changeMenuState(rowID);
        Actions.International({title: 'm_international'});
        return;
      case "7": //CONTACT US
        this.props.changeMenuState(rowID);
        Actions.ContactUS({title: 'm_contact_us'});
        return;
      case "8": //Language
        this.props.menuState();
        const lang = currentLanguage == 'EN' ? 'AR' : 'EN';
        this.props.changeLanguage(lang);
        return;
      case "9": //Log out
        Actions.Login();
        return;
      default:
        return;
    }
  }

 _renderRow (rowData, sectionID, rowID, highlightRow) {
    const {menuId } = this.props;
    return (
      <TouchableOpacity onPress={()=>{highlightRow(sectionID, rowID); this.onItemSelect(rowData, rowID)}}>
        <View style={styles.listView}>
          <View style={styles.titleContainer} >
            <Image source={ rowData.icon } style={ styles.titleIcon } resizeMode="contain" />
            <Text  style={styles.listViewText}>{rowData.title}</Text>
          </View>
          <Image source={ rowID === menuId ? arrow_clicked : arrow_unclicked } style={ styles.listArrow } resizeMode="contain" />
        </View>
      </TouchableOpacity>
    )
  }
  _renderSeparator (sectionID, rowID, adjacentRowHighlighted) {
      return (
        <View
          key={`${sectionID}-${rowID}`}
          style={{ height: 1, backgroundColor: '#4C605E', flex:1, opacity: 0.5}}
        />
      );
  }

  render() {
    const {currentLanguage} = this.props;
    
    let menuItems = [
        {title: language.m_home[currentLanguage], icon: i_language},
        {title: language.m_about_us[currentLanguage], icon: i_about_us},
        {title: language.m_mission_vission[currentLanguage], icon: i_international},
        {title: language.m_claims[currentLanguage], icon: i_claims},
        {title: language.m_borard[currentLanguage], icon: i_board},
        {title: language.m_members[currentLanguage], icon: i_members},
        {title: language.m_international[currentLanguage], icon: i_international},
        {title: language.m_contact_us[currentLanguage], icon: i_contact_us},
        {title: language.m_language[currentLanguage], icon: i_language},
        {title: language.m_logout[currentLanguage], icon: i_language},
    ];

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(menuItems);

    return (
      <View style={ styles.container } >
        <Image source={ background } style={ styles.background } />
        <ListView
          dataSource={dataSource}
          renderRow={this._renderRow.bind(this)}
          renderSeparator={this._renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight,
    paddingVertical: 20,
    zIndex: 0,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 270,
    height: screenHeight,
  },
  listView: {
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleIcon: {
    marginRight: 10,
    width: 25,
    height: 20,
  },
  listViewText: {
    backgroundColor: 'transparent',
    color: commonColors.title,
    fontSize: 12,
  },
  listArrow: {
    width: 40,
    height: 30,
  }
});

export default connect(state => ({
  menuId: state.parent.data,
}),{ changeLanguage, changeMenuState })(Menu);