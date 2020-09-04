import * as FileSystem from 'expo-file-system';

export default async function saveFileToApp(originPath,folderName,randomFileName,fileType){
    await FileSystem.copyAsync({
      from:originPath,
      to:FileSystem.documentDirectory+`${folderName}`+`${randomFileName}.${fileType}`
    })
  } 