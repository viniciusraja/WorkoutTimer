import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import Constants from 'config/constants';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CountDown from 'react-native-countdown-component';
import { dropTable } from 'database/database';
export default function MainRectangleButton(props) {
  const dispatch = useDispatch();
  const [timerEnded, setTimerEnded] = useState(false);
  return ( 
    <View style={[styles.container,{backgroundColor:props.color}]}>
      <View style={styles.actionImageContainer}>
        {props.imageUrl?<Image
          style={styles.actionImage}
          resizeMode="contain"
          source={require('assets/images/Icon.png')}
        />:
        (props.iconName&&<MaterialCommunityIcons
              name={`${props.iconName}`}
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />)
        }
      </View>
      <View style={styles.actionMainInformationContainer}>
        <Text style={styles.actionText}>{props.name}</Text>
        <Text style={styles.actionInformationTimeText}>
          props.actionInformation
        </Text>
      </View>
      <View style={styles.actionSubInformationContainer}>
        <TouchableOpacity 
        onPress={()=>dropTable()}
        >

        <MaterialCommunityIcons
          name="dots-horizontal-circle"
          size={Constants.Fonts.largeFontSize}
          color={Constants.Colors.primaryText}
          />
          </TouchableOpacity> 
        {!!props.duration&&<Text style={styles.actionTimeText}>{props.duration}</Text>}
      </View>
    </View>
  );
}
