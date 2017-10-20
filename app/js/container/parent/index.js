'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  findNodeHandle,  
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHeight, navBarHeight } from '../../styles/commonStyles';
import Menu from '../menu';
import language from '../../utils/language/language';

const logo = require('../../../assets/imgs/splash_screen/logo.png');
const menu_icon = require('../../../assets/imgs/splash_screen/menu.png');

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
  }

  onSideMenuChange(isOpen) {
    this.setState({isMenuOpen: isOpen});
  }

  toggleSideMenu() {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  render()
  {
      const { currentLanguage, title } = this.props;
      const { isMenuOpen } = this.state;
      const menuComponent = <Menu currentLanguage={currentLanguage} menuState={()=>this.toggleSideMenu()} />;
      return (
          <SideMenu
            isOpen={isMenuOpen}
            onChange={(isOpen)=>this.onSideMenuChange(isOpen)}
            menuPosition="right"
            openMenuOffset={270}
            menu={menuComponent}
          >
            <View style={ styles.container } >
              <View style={ styles.navBar } >
                {title == "main" ?
                <Image source={ logo } resizeMode="contain" style={ styles.logo } ></Image>
                : <Text style={styles.logoText}>{language[title][currentLanguage]}</Text>}
                <TouchableOpacity
                  activeOpacity={ .5 }
                  style={ styles.menu }
                  onPress={ this.toggleSideMenu.bind(this) }
                >
                  <Image source={ menu_icon } resizeMode="contain" style={styles.menuIcon} />  
                </TouchableOpacity>
              </View>
              <View style={styles.border} />
              {this.props.children}
            </View>
          </SideMenu>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  navBar: {
    backgroundColor: '#fff',
    height: navBarHeight,
    width: screenWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  border: {
    height: 2,
    width: screenWidth,
    backgroundColor: commonColors.grayMoreText,
  },
  logo: {
    width: 80,
    height: 80,
    alignItems: 'center',
  },
  logoText: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: '#333',
    marginTop: 8,
  },
  menu: {
    right: 0,
    position: 'absolute',
    width: 60,
    height: navBarHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default connect(state => ({
  currentLanguage: state.login.currentLanguage,
}),{ })(Parent);