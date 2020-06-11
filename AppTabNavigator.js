import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator';
import SettingsScreen from '../screens/SettingsScreen';

export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/homeIcon.png")} style={{width:50, height:50}}/>,
      tabBarLabel : "Home",
    }
  },
  SettingsScreen : {
    screen: SettingsScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/settingsIcon.png")} style={{width:50, height:50}}/>,
      tabBarLabel : "Settings",
    }
  },

  
});