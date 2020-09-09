export function setShowCreateWorkoutComponent() {
  return {
    type: 'SHOW_CREATE_WORKOUT_COMPONENT',
  };
}
export function setShowRepeatingActionComponent() {
  return {
    type: 'SHOW_REPEATING_ACTION_COMPONENT',
  };
}
export function setShowEditingActionIconComponent() {
  return {
    type: 'SHOW_EDDITING_ACTION_ICON_COMPONENT',
  }; 
}
export function setShowEditingActionSoundComponent() {
  return {
    type: 'SHOW_EDDITING_ACTION_SOUND_COMPONENT',
  };  
} 
export function setDurationOfWorkoutActionComponent(time) {
  return {
    type: 'SET_DURATION_OF_WORKOUT_ACTION_COMPONENT',
    payload: time,
  };
}
export function setStartOfActionRepetition(startActionId) {
  return {
    type: 'SET_START_OF_ACTION_REPETITION',
    payload: startActionId,
  };
}
export function setEndOfActionRepetition(endActionId) {
  return {
    type: 'SET_END_OF_ACTION_REPETITION',
    payload: endActionId,
  }; 
}   
export function setIconToActionComponent(iconName) {
  return {
    type: 'SET_ICON_TO_ACTION_COMPONENT',
    payload: iconName,
  };
}
export function setSoundToActionComponent(soundEffectName) {
  return {
    type: 'SET_SOUND_TO_ACTION_COMPONENT',
    payload: soundEffectName,
  };
}
