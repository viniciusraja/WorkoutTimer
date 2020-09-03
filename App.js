import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

import { StatusBar, View } from 'react-native';

import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import {
  useFonts,
  RedHatDisplay_500Medium,
  RedHatDisplay_700Bold
} from '@expo-google-fonts/red-hat-display';
import AppStackNavigator from 'navigation/stackNavigator';
import { AppLoading } from 'expo';
const store = configureStore();

export default function App() {
    let [fontsLoaded] = useFonts({
      "RedHatDisplay_Regular":RedHatDisplay_500Medium,
      "RedHatDisplay_Bold":RedHatDisplay_700Bold,
    });
    return fontsLoaded ? (
      <>
        <Provider store={store}>
          <StatusBar hidden />
          <AppStackNavigator />
        </Provider>
      </>
    ) : (
      <View style={{height:200, width:200, backgroundColor:'red'}}/>
    );
}


