export function setShowCreateActionComponent() {
  return {
    type: 'SHOW_CREATE_ACTION_COMPONENT',
  };
}
export function setShowEditingActionColorComponent() {
  return {
    type: 'SHOW_EDDITING_ACTION_COLOR_COMPONENT',
  };
}
export function setShowEditingActionIconComponent() {
  return {
    type: 'SHOW_EDDITING_ACTION_ICON_COMPONENT',
  };
}
export function setColorToActionComponent(color) {
  return {
    type: 'SET_COLOR_TO_ACTION_COMPONENT',
    payload: color,
  };
}
export function setImageToActionComponent(ImageUrl) {
  return {
    type: 'SET_IMAGE_TO_ACTION_COMPONENT',
    payload: ImageUrl,
  };
}
export function setIconToActionComponent(iconName) {
  return {
    type: 'SET_ICON_TO_ACTION_COMPONENT',
    payload: iconName,
  };
}
export function setSoundEffectToActionComponent(soundEffectName) {
  return {
    type: 'SET_SOUND_EFFECT_TO_ACTION_COMPONENT',
    payload: soundEffectName,
  };
}
