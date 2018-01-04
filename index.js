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
          title: 'Write', // for a textual button, provide the button title (label)
          id: 'write', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
          buttonColor: '#002699', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
          buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
          buttonFontWeight: 600, // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
        },
      ],
      leftButtons: [
        {
          title:'Vote',
          id: 'vote',
          buttonColor: '#002699',
          buttonFontSize: 14,
          buttonFontWeight: 600
        }
      ]
    } // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  }
});
