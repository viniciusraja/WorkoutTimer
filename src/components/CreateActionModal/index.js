import React, { useState, useEffect } from 'react';
import {
  View,
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import Constants from 'config/constants';
import { styles } from './styles';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  setShowCreateActionComponent,
  setShowEditingActionColorComponent,
  setImageToActionComponent,
  setShowEditingActionIconComponent,
  setShowEditingActionSoundComponent,
} from 'store/myActions/actions';
import { useDispatch, useSelector } from 'react-redux';
import saveFileToApp from 'utils/saveFileToApp';
import ColorPickerModal from './ColorPickerModal';
import IconPickerModal from './IconPickerModal';
import SoundPickerListModal from './SoundPickerListModal';
import db, { add, getActions } from 'database/database';

export default function CreateActionModal(props) {
  const [actionName, setActionName] = useState('');
  const [forceUpdate, setForceUpdate] = useState(false);
  const dispatch = useDispatch();
  const showEditingActionColorComponent = useSelector(
    (state) => state.getActions.showEditingActionColorComponent
  );
  const editingActionComponent = useSelector(
    (state) => state.getActions.editingActionComponent
  );

  const showCreateActionComponent = useSelector(
    (state) => state.getActions.showCreateActionComponent
  );
  function updateMyActions() {
    getActions();
  }
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCreateActionComponent}
        onRequestClose={() => {
          dispatch(setShowCreateActionComponent());
        }}>
        <View style={styles.container}>
          <TouchableOpacity
            style={{ position: 'absolute', top: 10, right: 10 }}
            onPress={() => dispatch(setShowCreateActionComponent())}>
            <Ionicons
              name="ios-close-circle"
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.backgroundColor}
            />
          </TouchableOpacity>
          <View style={styles.actionInformationContainer}>
            {!editingActionComponent.imageUrl ? (
              <TouchableOpacity
                style={styles.addImageIconContainer}
                onPress={() => dispatch(setShowEditingActionIconComponent())}>
                <MaterialCommunityIcons
                  name={
                    !!editingActionComponent.iconName
                      ? editingActionComponent.iconName
                      : 'camera-plus'
                  }
                  size={Constants.Fonts.xLargeFontSize}
                  color={Constants.Colors.primaryText}
                />
              </TouchableOpacity>
            ) : (
              <View style={styles.addImageIconContainer}>
                <Image
                  style={styles.actionImage}
                  resizeMode="contain"
                  source={{ uri: editingActionComponent.imageUrl }}
                />
              </View>
            )}
            <TextInput
              style={styles.input}
              placeholder="Nome da Ação"
              placeholderTextColor={Constants.Colors.primaryText}
              onChangeText={setActionName}
              defaultValue={actionName}
            />
          </View>
          <View style={[styles.actionInformationContainer]}>
            <TouchableOpacity
              style={[
                styles.addImageIconContainer,
                {
                  backgroundColor: editingActionComponent.color
                    ? editingActionComponent.color
                    : Constants.Colors.backgroundColorDarker,
                },
              ]}
              onPress={() => dispatch(setShowEditingActionColorComponent())}>
              <Ionicons
                name="ios-color-fill"
                size={Constants.Fonts.xLargeFontSize}
                color={Constants.Colors.primaryText}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => dispatch(setShowEditingActionColorComponent())}>
              <Text style={styles.selectText}>Selecione a Cor</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actionInformationContainer}>
            <TouchableOpacity
              style={styles.addImageIconContainer}
              onPress={() => dispatch(setShowEditingActionSoundComponent())}>
              <Ionicons
                name="ios-musical-notes"
                size={Constants.Fonts.xLargeFontSize}
                color={Constants.Colors.primaryText}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => dispatch(setShowEditingActionSoundComponent())}>
              <Text style={styles.selectText}>Selecione o Alerta</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              add(
                actionName,
                editingActionComponent.color,
                editingActionComponent.imageUrl,
                editingActionComponent.iconName,
                editingActionComponent.sound
              );
              console.log(getActions(), '----------------------------------');
            }}
            style={{ position: 'absolute', bottom: 10, right: 10 }}>
            <Ionicons
              name="ios-checkmark-circle"
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.agreeColor}
            />
          </TouchableOpacity>
        </View>
      </Modal>

      <ColorPickerModal />
      <IconPickerModal />
      <SoundPickerListModal />
    </>
  );
}
