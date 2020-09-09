import { Audio } from 'expo-av';

export default async function playSoundAsset(soundPath) {
    const soundObject = new Audio.Sound();
    try { 
      Audio.setAudioModeAsync({
        allowsRecordingIOS:false,
        interruptionModeIOS:Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
        playsInSilentModeIOS:true,
        interruptionModeAndroid:Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid:true,
        staysActiveInBackground:true,
        playThroughEarpieceAndroid:false,
      })  
      const { sound: soundObject, status } = await Audio.Sound.createAsync(
        soundPath,
        { shouldPlay: true }
      );
    } catch (error) { 
      console.log(error);
    }
  }