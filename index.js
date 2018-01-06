import { Navigation } from 'react-native-navigation';

import { registerScreens } from './js/screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'mainScreen', // unique ID registered with Navigation.registerScreen
    title: 'Ye Or Ne', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {
      navBarBackgroundColor: '#ffff80',
      navBarTextColor: '#002699'
    }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {
      rightButtons: [
        {
          id: 'write', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
          component: 'NavIcons',
          passProps: {
            type: 'writePoll'
          },
        },
      ],
      leftButtons: [
        {
          id: 'vote',
          component: 'NavIcons',
          passProps: {
            type: 'vote'
          },
        }
      ]
    } // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  }
});
