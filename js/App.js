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
  View
} from 'react-native';

import NavigatorUtils from './NavigatorUtils.js'

export default class App extends Component<{}> {

  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    NavigatorUtils.setNavigator(props.navigator)
  }

  onNavigatorEvent(event) {
    console.log(event)
    switch(event.id) {
      case 'write':
        this.props.navigator.showModal({
          screen: "writePoll", // unique ID registered with Navigation.registerScreen
          title: "Write Poll", // title of the screen as appears in the nav bar (optional)
          passProps: {}, // simple serializable object that will pass as props to the modal (optional)
          navigatorStyle: {navBarBackgroundColor: '#ffff80', navBarTextColor: '#002699'}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
          animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
        break
      case 'vote':
        this.props.navigator.showModal({
          screen: "vote", // unique ID registered with Navigation.registerScreen
          title: "Vote On Polls", // title of the screen as appears in the nav bar (optional)
          passProps: {}, // simple serializable object that will pass as props to the modal (optional)
          navigatorStyle: {navBarBackgroundColor: '#ffff80', navBarTextColor: '#002699'}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
          animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        });
        break
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.instructions}>
          Come back when you have written some polls!
        </Text>
      </SafeAreaView>
    );
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
