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
        <TextInput
          style={styles.writePollParameterStyle}
          maxLength={140}
          placeholder={'name of poll'}
          onChangeText={(pollName) => this.setState({pollName})}
          value={this.state.pollName}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
