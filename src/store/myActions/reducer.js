const initialState = {
  actionsList:[],
  showCreateActionComponent: false,
  showEditingActionColorComponent: false,
  showEditingActionIconComponent:false,
  showEditingActionSoundComponent:false,
  editingActionComponent: {
    color: '',
    imageUrl:'',
    iconName:'',
    sound:'',
    duration:''
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
    case 'SHOW_EDDITING_ACTION_SOUND_COMPONENT':
      return {
        ...state,
        showEditingActionSoundComponent: !state.showEditingActionSoundComponent,
      };
    case 'SET_COLOR_TO_ACTION_COMPONENT':
      return {
        ...state,
        editingActionComponent: {
          ...state.editingActionComponent,
          color: action.payload,
        },
      };
    case 'SET_IMAGE_TO_ACTION_COMPONENT':
      return {
        ...state,
        editingActionComponent: {
          ...state.editingActionComponent,
          imageUrl: action.payload,
        },
      };
    case 'SET_ICON_TO_ACTION_COMPONENT':
      return {
        ...state,
        editingActionComponent: {
          ...state.editingActionComponent,
          iconName: action.payload,
        },
      };
    case 'SET_SOUND_TO_ACTION_COMPONENT':
      return {
        ...state,
        editingActionComponent: {
          ...state.editingActionComponent,
          sound: action.payload,
        },
      };
    case 'SET_ACTIONS_LIST':
      return {
        ...state,
        actionsList: [
          ...action.payload,
        ],
      };
    default:
      return state;
  }
};

export default getActions;
