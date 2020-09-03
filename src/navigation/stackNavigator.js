import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateActionScreen from 'screens/CreateActionsScreen';
import Header from 'components/Header';
import HomeScreen from 'screens/HomeScreen';
import MyWorkoutsScreen from 'screens/MyWorkoutsScreen';
import CreateWorkoutScreen from 'screens/CreateWorkoutScreen';
import MyActionsScreen from 'screens/MyActionsScreen';

const AppStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
  CreateActionScreen: {
    screen: CreateActionScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
  MyActionsScreen: {
    screen: MyActionsScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
  CreateWorkoutScreen: {
    screen: CreateWorkoutScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
  MyWorkoutsScreen: {
    screen: MyWorkoutsScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});

export default createAppContainer(AppStack);
