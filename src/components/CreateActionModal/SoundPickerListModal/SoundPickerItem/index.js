import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'config/constants';
import { styles } from './styles';
import { setSoundToActionComponent } from 'store/myActions/actions';
import playSoundAsset from 'utils/playSoundAsset';
export default function SoundPickerItem(props) {
  const dispatch = useDispatch();
  const qrCode = useSelector((state) => state.getQrCode);
  const [timerEnded, setTimerEnded] = useState(false);
  const editingActionComponent = useSelector(
    (state) => state.getActions.editingActionComponent
  );
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        playSoundAsset(props.path);
        dispatch(setSoundToActionComponent(props));
      }}>
      <Text style={styles.title}>{props.name}</Text>
      {props.name == editingActionComponent.sound.name && (
        <Ionicons
          name="ios-checkmark"
          size={Constants.Fonts.xLargeFontSize}
          color={Constants.Colors.primaryText}
        />
      )}
    </TouchableOpacity>
  );
}
