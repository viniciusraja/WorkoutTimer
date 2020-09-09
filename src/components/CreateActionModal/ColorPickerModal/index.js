import React, { useState } from 'react';
import {
  View,
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Constants from 'config/constants';
import { styles } from './styles';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  setShowEditingActionColorComponent,
  setColorToActionComponent,
} from 'store/myActions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { TriangleColorPicker, fromHsv, toHsv } from 'react-native-color-picker';
export default function ColorPickerModal(props) {
  const [selectedColor, setSelectedColor] = useState('');
  const [colorChange, setColorChange] = useState('');
  const showEditingActionColorComponent = useSelector(
    (state) => state.getActions.showEditingActionColorComponent
  );
  const editingActionComponent = useSelector(
    (state) => state.getActions.editingActionComponent
  );
  const dispatch = useDispatch();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showEditingActionColorComponent}
      onRequestClose={() => {
        dispatch(setShowEditingActionColorComponent());
      }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ position: 'absolute', top: 0, right: 10 }}
            onPress={() => dispatch(setShowEditingActionColorComponent())}>
            <Ionicons
              name="ios-close-circle"
              size={Constants.Fonts.xLargeFontSize}
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
          oldColor={editingActionComponent.color || '#000'}
          color={colorChange}
          onColorChange={setColorChange}
          onColorSelected={(color) => {
            setSelectedColor(color);
          }}
          onOldColorSelected={(color) => {
            setSelectedColor(color);
          }}
          style={{ width: '70%', height: '80%', alignSelf: 'center' }}
        />
        <TouchableOpacity
          style={{ position: 'absolute', bottom: 5, right: 10 }}
          onPress={() => {
            dispatch(setColorToActionComponent(fromHsv(colorChange)));
            dispatch(setShowEditingActionColorComponent());
          }}>
          <Ionicons
            name="ios-checkmark-circle"
            size={Constants.Fonts.xLargeFontSize}
            color={Constants.Colors.agreeColor}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
