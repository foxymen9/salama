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

const logo = require('../../../assets/imgs/login/arrow.png');

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
      const { currentLanguage } = this.props;
      const { isMenuOpen } = this.state;
      const menuComponent = <Menu currentLanguage={currentLanguage} menuState={()=>this.toggleSideMenu()} />;
      return (
          <SideMenu
            isOpen={isMenuOpen}
            onChange={(isOpen)=>this.onSideMenuChange(isOpen)}
            menuPosition="right"
            openMenuOffset={200}
            menu={menuComponent}
          >
            <View style={ styles.container } >
              <View style={ styles.navBar } >
                <Image source={ logo } resizeMode="contain" style={ styles.logo } >
                </Image>
                <TouchableOpacity
                  activeOpacity={ .5 }
                  style={ styles.menu }
                  onPress={ this.toggleSideMenu.bind(this) }
                >
                  <Image source={ logo } resizeMode="contain" style={styles.menuIcon} />  
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
  },
  navBar: {
    backgroundColor: '#000',
    height: navBarHeight,
    width: screenWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  border: {
    height: 2,
    width: screenWidth,
    backgroundColor: '#f00',
  },
  logo: {
    width: 50,
    height: 50,
    alignItems: 'center',
  },
  logoText: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 19,
    marginTop: 20,
  },
  menu: {
    right: 0,
    position: 'absolute',
    width: 60,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(state => ({
}),{ })(Parent);