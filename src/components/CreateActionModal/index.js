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
} from 'store/myActions/actions';
import { useDispatch, useSelector } from 'react-redux';
import ColorPickerModal from 'components/ColorPickerModal';
import saveFileToApp from 'utils/saveFileToApp';
import IconPickerModal from 'components/IconPickerModal';
export default function CreateActionModal(props) {
  const [actionName, setActionName] = useState('');
  const dispatch = useDispatch();
  const showEditingActionColorComponent = useSelector(
    (state) => state.getActions.showEditingActionColorComponent
  );
  const editingActionComponet = useSelector(
    (state) => state.getActions.editingActionComponet
  );
  const showCreateActionComponent = useSelector(
    (state) => state.getActions.showCreateActionComponent
  );
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
            size={Constants.Fonts.largeFontSize}
            color={Constants.Colors.backgroundColor}
          />
        </TouchableOpacity>
        <View style={styles.actionInformationContainer}>
          {!editingActionComponet.imageUrl ? (
            <TouchableOpacity
              style={styles.addImageIconContainer}
              onPress={() =>  dispatch(setShowEditingActionIconComponent())}
              >
              <MaterialCommunityIcons
                name="camera-plus"
                size={Constants.Fonts.xLargeFontSize}
                color={Constants.Colors.primaryText}
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.addImageIconContainer}>
              <Image
                style={styles.actionImage}
                resizeMode="contain"
                source={{ uri: editingActionComponet.imageUrl }}
              />
            </View>
          )}
          <TextInput
            style={styles.input}
            placeholder="Nome da Ação"
            placeholderTextColor={Constants.Colors.primaryText}
            onChangeText={(text) => setActionName(text)}
            defaultValue={actionName}
          />
        </View>
        <View style={[styles.actionInformationContainer]}>
          <TouchableOpacity
            style={[
              styles.addImageIconContainer,
              {
                backgroundColor: editingActionComponet.color
                  ? editingActionComponet.color
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
          <TouchableOpacity style={styles.addImageIconContainer}>
            <Ionicons
              name="ios-musical-notes"
              size={Constants.Fonts.xLargeFontSize}
              color={Constants.Colors.primaryText}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectButton}>
            <Text style={styles.selectText}>Selecione o Alerta</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ position: 'absolute', bottom: 10, right: 10 }}>
          <Ionicons
            name="ios-checkmark-circle"
            size={Constants.Fonts.xLargeFontSize}
            color={Constants.Colors.activeColor}
          />
        </TouchableOpacity>
      </View>
      </Modal>
      
      <ColorPickerModal />
      <IconPickerModal />
    </>
  );
}
