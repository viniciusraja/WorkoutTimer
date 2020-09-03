import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import Constants from 'config/constants';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CountDown from 'react-native-countdown-component';
import { setQrCode } from 'store/qrCode/actions';
export default function MainRectangleButton(props) {
  const dispatch = useDispatch();
  const qrCode = useSelector((state) => state.getQrCode);
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    dispatch(setQrCode(''));
  }, [timerEnded]);
  return (
    <View style={styles.container}>
          <View
          style={styles.actionImageContainer}
          >
            <Image
            style={styles.actionImage}
            resizeMode="contain"
            source={require('assets/images/Icon.png')}
            />
          </View>
          <View
          style={styles.actionMainInformationContainer}
          >
          <Text style={styles.actionText}>props.ac</Text>
          <Text style={styles.actionInformationTimeText}>props.actionInformation</Text>
          </View>
          <View
          style={styles.actionSubInformationContainer}
          >
          <MaterialCommunityIcons name="dots-horizontal-circle" size={Constants.Fonts.largeFontSize} color={Constants.Colors.primaryText}/>
          <Text style={styles.actionTimeText}>2:00</Text>
          </View>
    </View>
  );
}
