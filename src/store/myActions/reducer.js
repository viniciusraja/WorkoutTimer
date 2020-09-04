const initialState = {
  showCreateActionComponent: false,
  showEditingActionColorComponent: false,
  showEditingActionIconComponent:false,
  editingActionComponet: {
    color: '',
    imageUrl:'',
    iconName:'',
    soundEffect:''
  },
};

const getActions = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_CREATE_ACTION_COMPONENT':
      return {
        ...state,
        showCreateActionComponent: !state.showCreateActionComponent,
      };
    case 'SHOW_EDDITING_ACTION_COLOR_COMPONENT':
      return {
        ...state,
        showEditingActionColorComponent: !state.showEditingActionColorComponent,
      };
    case 'SHOW_EDDITING_ACTION_ICON_COMPONENT':
      return {
        ...state,
        showEditingActionIconComponent: !state.showEditingActionIconComponent,
      };
    case 'SET_COLOR_TO_ACTION_COMPONENT':
      return {
        ...state,
        editingActionComponet: {
          ...state.editingActionComponet,
          color: action.payload,
        },
      };
    case 'SET_IMAGE_TO_ACTION_COMPONENT':
      return {
        ...state,
        editingActionComponet: {
          ...state.editingActionComponet,
          imageUrl: action.payload,
        },
      };
    case 'SET_ICON_TO_ACTION_COMPONENT':
      return {
        ...state,
        editingActionComponet: {
          ...state.editingActionComponet,
          iconName: action.payload,
        },
      };
    case 'SET_SOUND_EFFECT_TO_ACTION_COMPONENT':
      return {
        ...state,
        editingActionComponet: {
          ...state.editingActionComponet,
          soundEffect: action.payload,
        },
      };
    default:
      return state;
  }
};

export default getActions;
