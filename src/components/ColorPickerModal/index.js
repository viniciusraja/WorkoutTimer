import React, { useState } from 'react';
import {
  View,
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Constants from 'config/constants';
import { styles } from './styles';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { setShowEditingColorActionComponent, setColorToActionComponent } from 'store/myActions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { TriangleColorPicker, fromHsv, toHsv } from 'react-native-color-picker';
export default function ColorPickerModal(props) {
  const [selectedColor, setSelectedColor] = useState('red');
  const [colorChange, setColorChange] = useState('red');
  const showEditingColorActionComponent = useSelector(
    (state) => state.getActions.showEditingColorActionComponent
  );
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ position: 'absolute', top: 0, right: 10 }}
          onPress={() => dispatch(setShowEditingColorActionComponent())}>
          <Ionicons
            name="ios-close-circle"
            size={Constants.Fonts.largeFontSize}
            color={Constants.Colors.backgroundColor}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Selecione a cor</Text>
        <Ionicons
          name="ios-color-fill"
          size={Constants.Fonts.largeFontSize}
          color={Constants.Colors.darkText}
        />
      </View>
      <TriangleColorPicker
        oldColor={selectedColor}
        color={colorChange}
        onColorChange={setColorChange}
        onColorSelected={(color) => {
          setSelectedColor(color)
        }}
        onOldColorSelected={(color) => {
          setSelectedColor(color)
        }}
        style={{ width: '70%', height: '100%', alignSelf: 'center' }}
      />
      <TouchableOpacity
        style={{ position: 'absolute', bottom: 5, right: 10 }}
        onPress={() =>{
        dispatch(setColorToActionComponent(fromHsv(colorChange)))
        dispatch(setShowEditingColorActionComponent())
        }}>
        <Ionicons
          name="ios-checkmark-circle"
          size={Constants.Fonts.xLargeFontSize}
          color={Constants.Colors.activeColor}
        />
      </TouchableOpacity>
    </View>
  );
}
