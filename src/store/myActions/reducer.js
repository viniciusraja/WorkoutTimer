const initialState = {
  showCreateActionComponent:false,
};

const getActions = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_CREATE_ACTION_COMPONENT':
      return {
        ...state,
        showCreateActionComponent: !state.showCreateActionComponent,
      };
    default:
      return state;
  }
};

export default getActions;
