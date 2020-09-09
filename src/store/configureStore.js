import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import getActions from 'store/myActions/reducer';
import getSoundsAssetsList from 'store/soundsAssets/reducer';
import getWorkouts from 'store/myWorkouts/reducer'
const rootReducer = combineReducers({
  getActions,
  getSoundsAssetsList,
  getWorkouts

});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore; 
  