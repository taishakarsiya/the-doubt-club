import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import SubjectsScreen from './screens/SubjectsScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { AppTabNavigator } from './components/AppTabNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  SubjectsScreen:{screen: SubjectsScreen},
  Drawer:{screen: AppDrawerNavigator},
  //BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);