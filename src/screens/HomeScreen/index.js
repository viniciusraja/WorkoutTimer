import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import Constants from 'config/constants';
import { styles } from './styles';
import MainSquareButton from 'components/MainSquareButton';
import MainRectangleButton from 'components/MainRectangleButton';
import MyCalendarList from 'components/MyCalendar/MyCalendarList';
import MainRectangleSlideButton from 'components/MainRectangleSlideButton';
import Footer from 'components/Footer/HomeScreen';
export default function HomeScreen() {
  const [userCelNumeber, setUserCelNumeber] = useState('');
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}> 
    <Text style={styles.titleLastWorkouts}>Últimos Treinos</Text>
    <MainRectangleButton iconName="qrcode" buttonName="Inicie seu Job" />
    <Footer/>
    </View>
  );
}
