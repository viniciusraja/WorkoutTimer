import React, { useState, useEffect } from 'react';
import {
  View,
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Constants from 'config/constants';
import { styles } from './styles';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { setShowCreateActionComponent, setShowEditingColorActionComponent, setImageToActionComponent } from 'store/myActions/actions';
import { useDispatch, useSelector } from 'react-redux';
import expoConstants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Random from 'expo-random';
import ColorPickerModal from 'components/ColorPickerModal';
import * as FileSystem from 'expo-file-system';
import getFile from 'utils/getFileInformation'
export default function CreateActionModal(props) {
  const [actionName, setActionName] = useState('');
  const dispatch = useDispatch();
  const showEditingColorActionComponent = useSelector(
    (state) => state.getActions.showEditingColorActionComponent
  );
  const editingActionComponet = useSelector(
    (state) => state.getActions.editingActionComponet
  );

  
  useEffect(() => {
    (async () => {
      try{
      if (expoConstants.platform.ios) {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Precisamos de permissão para acessar sua galeria!');
        }
      }
    }catch(error){
      console.log(error)
    }
    })();
  }, []);
  const pickImage = async () => {
    try{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const {fileType,fileName}=getFile(result.uri)
    const randomBytes = await Random.getRandomBytesAsync(3);
    const randomFileName=`${fileName}-${randomBytes[0]}-${randomBytes[1]}-${randomBytes[2]}`
    if (!result.cancelled) {
      result.uri =
        Platform.OS === 'android'
          ? result.uri
          : result.uri.replace('file://', '');
      result.type = `${result.type}/${
        (result.uri.split('.'),
        result.uri.split('.')[result.uri.split('.').length - 1])
      }`;
    }
    await FileSystem.copyAsync({
      from:result.uri,
      to:FileSystem.documentDirectory+"actionsImages"+`${randomFileName}.${fileType}`
    })
    return FileSystem.documentDirectory+"actionsImages"+`${randomFileName}.${fileType}`;
  }catch(error){
  console.log(error)
  };
}

  async function selectImageToActionComponent(){
    try{
    const imageUrl= await pickImage()
    dispatch(setImageToActionComponent(imageUrl))
  }catch(error){
    console.log(error)
  } 
  }

  return (
    <View style={styles.container}>
      {!showEditingColorActionComponent ? (
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
            {!editingActionComponet.imageUrl?
            <TouchableOpacity style={styles.addImageIconContainer}
            onPress={()=>selectImageToActionComponent()}
            >
              <MaterialCommunityIcons
                name="camera-plus"
                size={Constants.Fonts.xLargeFontSize}
                color={Constants.Colors.primaryText}
              />
            </TouchableOpacity>:
            <View style={styles.addImageIconContainer}>
            <Image
              style={styles.actionImage}
              resizeMode="contain"
              source={{uri:editingActionComponet.imageUrl}}
            />
          </View>
            }

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
