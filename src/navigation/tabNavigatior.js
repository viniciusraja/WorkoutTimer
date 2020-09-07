import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeStack,MyActionsStack, MyWorkoutsStack } from './stackNavigator';
import CreateAction from 'assets/svgs/createActionIcon.svg';
import { Ionicons } from '@expo/vector-icons';
import MyWorkouts from 'assets/svgs/myWorkoutsIcon.svg';
import MyActions from 'assets/svgs/myActionsIcon.svg';
import Constants from 'config/constants';
import Footer from 'components/Footer';
const BottomNavigator=createBottomTabNavigator(
  {
    Home:HomeStack,
    MyActions: MyActionsStack,
    MyWorkouts :MyWorkoutsStack,

  },
  {
    tabBarComponent:Footer,
  }
);

export default createAppContainer(BottomNavigator);