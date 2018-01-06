import App from './App.js'

import writePoll from './writePoll.js'

import vote from './vote.js'

import NavIcons from './NavIcons.js'

import {
  Navigation
} from 'react-native-navigation'

export function registerScreens() {
  Navigation.registerComponent('mainScreen', () => App);
  Navigation.registerComponent('writePoll', () => writePoll);
  Navigation.registerComponent('vote', () => vote);
  Navigation.registerComponent('NavIcons', () => NavIcons);
}
