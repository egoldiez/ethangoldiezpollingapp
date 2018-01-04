/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class App extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Testing
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  writePollParameterStyle: {
    height: 40,
    borderRadius: 10,
    borderColor: '#002699',
    borderWidth: 1,
    padding: 10,
    width: Dimensions.get('window').width - 20,
    margin: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#002699',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
