import React, { useState } from 'react';
import {
  View,
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'config/constants';
import { styles } from './styles';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { setShowCreateActionComponent, setShowEditingColorActionComponent } from 'store/myActions/actions';
import { useDispatch, useSelector } from 'react-redux';
import ColorPickerModal from 'components/ColorPickerModal';
export default function CreateActionModal(props) {
  const [actionName, setActionName] = useState('');
  const dispatch = useDispatch();
  const showEditingColorActionComponent = useSelector(
    (state) => state.getActions.showEditingColorActionComponent
  );
  const editingActionComponet = useSelector(
    (state) => state.getActions.editingActionComponet
  );

  return (
    <View style={styles.container}>
      {showEditingColorActionComponent ? (
        <>
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
            <View style={styles.addImageIconContainer}>
              <MaterialCommunityIcons
                name="camera-plus"
                size={Constants.Fonts.xLargeFontSize}
                color={Constants.Colors.primaryText}
              />
            </View>
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
              style={[styles.addImageIconContainer, {backgroundColor:editingActionComponet.color?editingActionComponet.color:Constants.Colors.backgroundColorDarker}]}
              onPress={() => dispatch(setShowEditingColorActionComponent())}
              > 
              <Ionicons
                name="ios-color-fill"
                size={Constants.Fonts.xLargeFontSize}
                color={Constants.Colors.primaryText}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectButton}
            onPress={() => dispatch(setShowEditingColorActionComponent())}
            >
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
        </>
      ) : (
        <ColorPickerModal />
      )}
    </View>
  );
}
