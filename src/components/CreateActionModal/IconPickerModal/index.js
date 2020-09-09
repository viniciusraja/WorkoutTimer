import React, { useState } from 'react';
import {
  View,
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Constants from 'config/constants';
import { styles } from './styles';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  setShowEditingActionIconComponent,
  setIconToActionComponent,
  setImageToActionComponent,
} from 'store/myActions/actions';
import * as Random from 'expo-random';
import * as FileSystem from 'expo-file-system';
import expoConstants from 'expo-constants';

import pickImage from 'utils/selectFromGallery';
import saveFileToApp from 'utils/saveFileToApp';
import getFileInformation from 'utils/getFileInformation';

export default function IconPickerModal(props) {
  const showEditingActionIconComponent = useSelector(
    (state) => state.getActions.showEditingActionIconComponent
  );
  const dispatch = useDispatch();

  async function getPermission() {
    try {
      if (expoConstants.platform.ios) {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Precisamos de permissão para acessar sua galeria!');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function selectImageToEditingActionComponent() {
    try {
      const imageUrl = await pickImage();
      const { fileType, fileName } = getFileInformation(imageUrl);
      const randomBytes = await Random.getRandomBytesAsync(3);
      const randomFileName = `${fileName}-${randomBytes[0]}-${randomBytes[1]}-${randomBytes[2]}`;
      const fileDestinationPath =
        FileSystem.documentDirectory +
        'actionsImages' +
        `${randomFileName}.${fileType}`;
      saveFileToApp(imageUrl, 'actionsImages', randomFileName, fileType);
      dispatch(setImageToActionComponent(imageUrl));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showEditingActionIconComponent}
      onRequestClose={() => {
        dispatch(setShowEditingActionIconComponent());
      }}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Selecione o ícone da ação</Text>
        <TouchableOpacity
          style={{ position: 'absolute', top: 10, right: 10 }}
          onPress={() => dispatch(setShowEditingActionIconComponent())}>
          <Ionicons
            name="ios-close-circle"
            size={Constants.Fonts.xLargeFontSize}
            color={Constants.Colors.backgroundColor}
          />
        </TouchableOpacity>
        <View style={styles.iconRow}>
          <TouchableOpacity
            onPress={() => dispatch(setIconToActionComponent('run'))}>
            <MaterialCommunityIcons
              name="run"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch(setIconToActionComponent('run-fast'))}>
            <MaterialCommunityIcons
              name="run-fast"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch(setIconToActionComponent('clock-outline'))}>
            <MaterialCommunityIcons
              name="clock-outline"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch(setIconToActionComponent('swim'))}>
            <MaterialCommunityIcons
              name="swim"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch(setIconToActionComponent('alert'))}>
            <MaterialCommunityIcons
              name="alert"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.iconRow}>
          <TouchableOpacity
            onPress={() => dispatch(setIconToActionComponent('biathlon'))}>
            <MaterialCommunityIcons
              name="biathlon"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch(setIconToActionComponent('bike'))}>
            <MaterialCommunityIcons
              name="bike"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch(setIconToActionComponent('alarm-bell'))}>
            <MaterialCommunityIcons
              name="alarm-bell"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch(setIconToActionComponent('bomb'))}>
            <MaterialCommunityIcons
              name="bomb"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch(setIconToActionComponent('boxing-glove'))}>
            <MaterialCommunityIcons
              name="boxing-glove"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.iconRow}>
          <TouchableOpacity
            onPress={() =>
              dispatch(setIconToActionComponent('car-child-seat'))
            }>
            <MaterialCommunityIcons
              name="car-child-seat"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch(setIconToActionComponent('dumbbell'))}>
            <MaterialCommunityIcons
              name="dumbbell"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch(setIconToActionComponent('escalator'))}>
            <MaterialCommunityIcons
              name="escalator"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch(setIconToActionComponent('flash'))}>
            <MaterialCommunityIcons
              name="flash"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch(setIconToActionComponent('human-handsup'))}>
            <MaterialCommunityIcons
              name="human-handsup"
              style={styles.icon}
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.iconRow,
            { justifyContent: 'space-between', alignItems: 'flex-end' },
          ]}>
          <TouchableOpacity
            onPress={() => {
              getPermission();
              selectImageToEditingActionComponent();
            }}
            style={[styles.selctButtonContainer]}>
            <Text style={styles.selctButtonText}>Selecionar da galeria</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => dispatch(setShowEditingActionIconComponent())}
            style={{
              width: '30%',
              height: '100%',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <Ionicons
              name="ios-checkmark-circle"
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.agreeColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
