const initialState = {
  showCreateActionComponent: false,
  showEditingColorActionComponent: false,
  editingActionComponet: {
    color: '',
  },
};

const getActions = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_CREATE_ACTION_COMPONENT':
      return {
        ...state,
        showCreateActionComponent: !state.showCreateActionComponent,
      };
    case 'SHOW_COLOR_ACTION_COMPONENT':
      return {
        ...state,
        showEditingColorActionComponent: !state.showEditingColorActionComponent,
      };
    case 'SET_COLOR_TO_ACTION_COMPONENT':
      return {
        ...state,
        editingActionComponet: {
          color: action.payload,
        },
      };
    default:
      return state;
  }
};

export default getActions;
