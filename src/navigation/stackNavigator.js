import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Header from 'components/Header';
import HomeScreen from 'screens/HomeScreen';
import MyWorkoutsScreen from 'screens/MyWorkoutsScreen';
import MyActionsScreen from 'screens/MyActionsScreen';

export const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  }, 
})

export const MyActionsStack = createStackNavigator({
  MyActionsScreen: {
    screen: MyActionsScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
})
export const MyWorkoutsStack = createStackNavigator({
  MyWorkoutsScreen: {
    screen: MyWorkoutsScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});

