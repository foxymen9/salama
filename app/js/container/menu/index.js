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

import { screenWidth, screenHeight } from '../../styles/commonStyles';
import * as commonColors from '../../styles/commonColors';

const arrow = require('../../../assets/imgs/login/arrow.png');

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
    this.props.menuState();
    /*const {currentLanguage, menuSelectedID, loggin } = this.props;

    if (rowID == menuSelectedID) {
      //Hide menu when select the current page
      this.props.menuState();
      return;
    }
    
    switch (rowID) {
      case "0": //Home
        this.props.saveMenuSelectedID(rowID);
        Actions.Main();
        return;
      case "1": //My Service
        this.props.saveMenuSelectedID(rowID);
        Actions.MyServices();
        return;
      case "2": //Spepcial Services
        this.props.saveMenuSelectedID(rowID);
        Actions.Offers();
        return;
      case "3": //My Account
        this.props.saveMenuSelectedID(rowID);
        Actions.Profile();
        return;
      case "4": //Support Ticket
        this.props.saveMenuSelectedID(rowID);
        Actions.Ticket();
        return;
      case "5": //Language
        const lang = currentLanguage == 'EN' ? 'AR' : 'EN';
        this.props.changeLanguage(lang);
        this.props.menuState();
        return;
      case "6": //Vist site (nard.sa)
        Linking.openURL("https://www.nard.sa");
        this.props.menuState();
        return;
      case "7": //Log out
        this.props.logout();
        this.props.saveMenuSelectedID('null');
        Actions.Login();
        return;
      default:
        return;
    }*/
  }

 _renderRow (rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity onPress={()=>{highlightRow(sectionID, rowID); this.onItemSelect(rowData, rowID)}}>
        <View style={styles.listView}>
          <Text  style={styles.listViewText}>{rowData}</Text>
          <Image source={ arrow } style={ styles.listArrow } resizeMode="contain" />
        </View>
      </TouchableOpacity>
    )
  }
  _renderSeparator (sectionID, rowID, adjacentRowHighlighted) {
      return (
        <View
          key={`${sectionID}-${rowID}`}
          style={{ height: 1, backgroundColor: '#3A3A3A', flex:1}}
        />
      );
  }

  render() {
    const {currentLanguage} = this.props;
    let menuItems = [];
    
    menuItems = [
          "menu1",
          "menu2",
          "menu3"
    ];

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(menuItems);

    return (
      <View style={ styles.container } >
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
    backgroundColor: '#000',
    height: screenHeight
  },
  listView: {
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  listViewText: {
    color: commonColors.title,
  },
  listArrow: {
    width: 15,
    height: 15,
  }
});

export default connect(state => ({
}),{ })(Menu);