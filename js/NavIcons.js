/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import NavigatorUtils from './NavigatorUtils.js';

export default class App extends Component<{}> {

  render() {
    const navigator = NavigatorUtils.getNavigator();
    switch(this.props.type) {
      case 'writePoll':
        return (
          <TouchableOpacity onPress={() =>
              navigator.showModal({
                    screen: "writePoll",
                    title: "Write Poll",
                    passProps: {},
                    navigatorStyle: {navBarBackgroundColor: '#ffff80', navBarTextColor: '#002699'},
                    animationType: 'slide-up'
                  })}>
            <FontAwesome name={'pencil-square-o'} size={20} color={'#002699'} />
          </TouchableOpacity>
        );
      case 'vote':
        return (
          <TouchableOpacity onPress={() =>
              navigator.showModal({
                    screen: "vote",
                    title: "Vote on Polls!",
                    passProps: {},
                    navigatorStyle: {navBarBackgroundColor: '#ffff80', navBarTextColor: '#002699'},
                    animationType: 'slide-up'
                  })}>
            <FontAwesome name={'th-large'} size={20} color={'#002699'} />
          </TouchableOpacity>
        );
      case 'dismissWrite':
        return (
          <TouchableOpacity onPress={() =>
            navigator.dismissModal({
              animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
            })}>
            <FontAwesome name={'long-arrow-left'} size={20} color={'#002699'} />
          </TouchableOpacity>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#002699',
    margin: 10,
  },
});
