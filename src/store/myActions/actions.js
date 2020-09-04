export function setShowCreateActionComponent() {
  return {
    type: 'SHOW_CREATE_ACTION_COMPONENT',
  };
}
export function setShowEditingColorActionComponent() {
  return {
    type: 'SHOW_COLOR_ACTION_COMPONENT',
  };
}
export function setColorToActionComponent(color) {
  return {
    type: 'SET_COLOR_TO_ACTION_COMPONENT',
    payload: color,
  };
}
