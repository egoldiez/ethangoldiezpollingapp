/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ActionSheetIOS,
  Button,
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import WritePollParameter from './writePollParameter';
import { Navigation } from 'react-native-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

const pollParameters = [
  {placeholder: 'Option 1', identityName: 'ansOne'},
  {placeholder: 'Option 2', identityName: 'ansTwo'},
  {placeholder: 'Option 3(Optional)', identityName: 'ansThree'},
  {placeholder: 'Option 4(Optional)', identityName: 'ansFour'},
];

const BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

export default class App extends Component<{}> {

  static navigatorButtons = {
    leftButtons: [
      {
        title: 'Dismiss', // for a textual button, provide the button title (label)
        id: 'dismissWrite', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        buttonColor: '#002699', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      },
    ]
  };

  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      pollName: '',
      category: null,
      responses: {},
      finishPoll: false,
      ans1: '',
      ans2: '',
      ans3: '',
      ans4: '',
    };
    this.showActionSheet = this.showActionSheet.bind(this)
  }

  onNavigatorEvent(event) {
    switch(event.id) {
      case 'dismissWrite':
        this.props.navigator.dismissModal({
          animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
        });
        break
    }
  }

  onButtonPress(event) {
    this.setState({finishPoll: true});
    this.props.navigator.dismissModal({
      animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
    });
  }

  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    },
    (buttonIndex) => {
      if(buttonIndex != CANCEL_INDEX && buttonIndex != DESTRUCTIVE_INDEX) {
        this.setState({category: BUTTONS[buttonIndex]})
      } else if(buttonIndex == DESTRUCTIVE_INDEX) {
        this.setState({category: null})
      }
    });
    // this.setState({category: buttonIndex})
    // console.log(this.state.category)
  }

  callWritePollParameter(placeholder,identityName) {
    const saeInput = (
      <View style={{alignItems: 'center', justifyContent: 'center'}} key={identityName}>
        <Sae
          style={{height: 40, borderRadius: 10, borderColor: '#002699', borderWidth: 0, padding: 10, width: Dimensions.get('window').width - 20, margin: 5}}
          inputStyle={{color: '#002699'}}
          label={[identityName]}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconSize={20}
          iconColor={'#002699'}
          returnKeyType={'done'}
          value={this.state[identityName]}
          label={identityName}
          onChangeText={(text) => this.setState({[identityName]: text})}
        />
    </View>
    );
    return (
      saeInput
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={{color: '#002699', fontSize: 20}}>
            Write a poll
          </Text>
          <Sae
            style={{height: 40, borderRadius: 10, borderColor: '#002699', borderWidth: 0, padding: 10, width: Dimensions.get('window').width - 20, margin: 5}}
            inputStyle={{color: '#002699'}}
            iconClass={FontAwesomeIcon}
            iconName={'pencil'}
            iconSize={20}
            iconColor={'#002699'}
            returnKeyType={'done'}
            value={this.state.pollName}
            label={'Name of Poll'}
            onChangeText={(text) => this.setState({pollName: text})}
          />
          {pollParameters.map(pollObj => this.callWritePollParameter(pollObj.placeholder, pollObj.identityName))}
          <TouchableOpacity onPress={this.showActionSheet} activeOpacity={1}>
            <Sae
              ref={ref => this._categoryRef = ref}
              style={{height: 40, borderRadius: 10, borderColor: '#002699', borderWidth: 0, padding: 10, width: Dimensions.get('window').width - 20, margin: 5}}
              inputStyle={{color: '#002699'}}
              iconClass={FontAwesomeIcon}
              iconName={'pencil'}
              iconSize={20}
              editable={false}
              iconColor={'#002699'}
              returnKeyType={'done'}
              value={this.state.category}
              label={'Category'}
            />
            <View style={{backgroundColor: 'transparent', position: 'absolute', top:0, right:0, left:0, bottom:0}}/>
          </TouchableOpacity>
          <View style={styles.writePollParameterStyleButton}>
            <Button
              onPress={() => this.onButtonPress('dismissWrite')}
              title={'Post'}
              color={'#ffff80'}
              />
          </View>
        </View>
      </SafeAreaView>
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
  writePollParameterStyleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002699',
    height: 40,
    borderRadius: 10,
    borderColor: '#002699',
    borderWidth: 1,
    padding: 10,
    width: Dimensions.get('window').width - 20,
    margin: 40
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

});
