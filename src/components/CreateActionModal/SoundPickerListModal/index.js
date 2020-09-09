import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import Constants from 'config/constants';
import { styles } from './styles';
import SoundPickerItem from './SoundPickerItem';
import { setShowEditingActionSoundComponent } from 'store/myActions/actions';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { setSoundAssetsList } from 'store/soundsAssets/actions';
import soundsAssetsPathArray from 'assets/sounds';

export default function SoundPickerListModal(props) {
  const dispatch = useDispatch();

  const soundsAssetsList = useSelector(
    (state) => state.getSoundsAssetsList.soundsAssetsList
  );
  const showEditingActionSoundComponent = useSelector(
    (state) => state.getActions.showEditingActionSoundComponent
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showEditingActionSoundComponent}
      onRequestClose={() => {
        dispatch(setShowEditingActionSoundComponent());
      }}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Selecione o alerta da ação</Text>
        <TouchableOpacity
          style={{ position: 'absolute', top: 10, right: 10 }}
          onPress={() => dispatch(setShowEditingActionSoundComponent())}>
          <Ionicons
            name="ios-close-circle"
            size={Constants.Fonts.xLargeFontSize}
            color={Constants.Colors.backgroundColor}
          />
        </TouchableOpacity>
        <FlatList
          style={styles.actionsList}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          data={soundsAssetsPathArray}
          renderItem={({ item }) => <SoundPickerItem {...item} />}
          keyExtractor={(item) => `${item.name}`}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{ width: '100%', height: 10 }} />
          )}
          ListFooterComponent={() => (
            <View style={{ width: '100%', height: 10 }} />
          )}
        />

        <TouchableOpacity
          onPress={() => dispatch(setShowEditingActionSoundComponent())}
          style={{
            width: '100%',
            height: '8%',
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
    </Modal>
  );
}
