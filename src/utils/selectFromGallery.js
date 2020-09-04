import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default async function pickImage(){

 
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        result.uri =
          Platform.OS === 'android'
            ? result.uri
            : result.uri.replace('file://', '');
        result.type = `${result.type}/${
          (result.uri.split('.'),
          result.uri.split('.')[result.uri.split('.').length - 1])
        }`;
        return result.uri;
      }
    } catch (error) {
      console.log(error);
    }
}
