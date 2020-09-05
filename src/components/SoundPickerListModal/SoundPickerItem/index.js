import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'config/constants';
import { styles } from './styles';
export default function SoundPickerItem(props) {
  const dispatch = useDispatch();
  const qrCode = useSelector((state) => state.getQrCode);
  const [timerEnded, setTimerEnded] = useState(false);
 console.log(props)
  return (  
    <TouchableOpacity style={styles.container}
    
    >
      <Text style={styles.title}>
        {props.name}
      </Text>
      <Ionicons
              name="ios-checkmark"
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
    </TouchableOpacity>
  );
}
