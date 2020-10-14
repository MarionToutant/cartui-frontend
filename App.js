import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(); // To ignore all log notifications

import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import ConnectScreen from './screens/Connect';
import HomeScreen from './screens/Home';
import MapScreen from './screens/Map';

import Ionicons from 'react-native-vector-icons/Ionicons';

// BOTTOM NAVIGATOR

var BottomNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        var iconName;
        if (navigation.state.routeName == 'Home') {
          iconName = 'md-home';
        } else if (navigation.state.routeName == 'Map') {
          iconName = 'md-map';
        } 
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#009788',
      style: {backgroundColor: '#00B8A9'},
    },
  }
);

// STACK NAVIGATOR

var StackNavigator = createStackNavigator(
  {
    Connect: ConnectScreen,  
    BottomNavigator: BottomNavigator
  }, 
  { 
    headerMode: 'none' 
  } 
);  

// APP CONTAINER

const Navigation = createAppContainer(StackNavigator);

// EXPORT APP FUNCTION

export default function App() {
  return (
    <Navigation/>
  );
}