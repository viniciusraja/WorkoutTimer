const initialState = {
  showCreateWorkoutComponent: false,
  showRepeatingActionComponent: false,
  showEditingActionIconComponent:false,
  showEditingActionSoundComponent:false,
  workoutsList:[],
  editingWorkoutComponet: {
    duration: '',
    startActionId:'',
    endActionId:'',
  },
};

const getWorkouts = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_CREATE_WORKOUT_COMPONENT':
      return {
        ...state,
        showCreateWorkoutComponent: !state.showCreateWorkoutComponent,
      };
    case 'SHOW_REPEATING_ACTION_COMPONENT':
      return {
        ...state,
        showRepeatingActionComponent: !state.showRepeatingActionComponent,
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
    case 'SET_DURATION_OF_WORKOUT_ACTION_COMPONENT':
      return {
        ...state,
        editingWorkoutComponet: {
          ...state.editingWorkoutComponet,
          duration: action.payload,
        },
      };
    case 'SET_START_OF_ACTION_REPETITION':
      return {
        ...state,
        editingWorkoutComponet: {
          ...state.editingWorkoutComponet,
          startActionId: action.payload,
        },
      };
    case 'SET_END_OF_ACTION_REPETITION':
      return {
        ...state,
        editingWorkoutComponet: {
          ...state.editingWorkoutComponet,
          endActionId: action.payload,
        },
      };
    case 'SET_ICON_TO_ACTION_COMPONENT':
      return {
        ...state,
        editingWorkoutComponet: {
          ...state.editingWorkoutComponet,
          iconName: action.payload,
        },
      };
    case 'SET_SOUND_TO_ACTION_COMPONENT':
      return {
        ...state,
        editingWorkoutComponet: {
          ...state.editingWorkoutComponet,
          sound: action.payload,
        },
      };
    default:
      return state;
  }
};

export default getWorkouts;
