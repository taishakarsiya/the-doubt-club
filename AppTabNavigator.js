import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DiscussionScreen from '../screens/DiscussionScreen';
import DoubtScreen from '../screens/DoubtScreen';



export const AppTabNavigator = createBottomTabNavigator({
  DiscussionScreen : {
    screen: DiscussionScreen,
  },
  DoubtScreen: {
    screen : DoubtScreen,
  }
})    
   