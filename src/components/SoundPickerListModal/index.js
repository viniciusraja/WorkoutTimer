import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Modal, FlatList } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import Constants from 'config/constants';
import { styles } from './styles';
import SoundPickerItem from './SoundPickerItem';
import { setShowEditingActionSoundComponent } from 'store/myActions/actions';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

export default function SoundPickerListModal(props) {
  const dispatch = useDispatch();
  const qrCode = useSelector((state) => state.getQrCode);
  const [timerEnded, setTimerEnded] = useState(false);
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
    <Text style={styles.headerTitle}>Selecione o ícone da ação</Text>
    <FlatList
        style={styles.actionsList}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        data={soundsVector}
        renderItem={({ item }) => <SoundPickerItem {...item} />}
        keyExtractor={(item) => `${item.localUri}`}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{ width: '100%', height: 10 }} />
        )}
       
        ListFooterComponent={() => (
          <View style={{ width: '100%', height: 10 }} />
        )}
      />

    </View>
    </Modal>
  );
}
