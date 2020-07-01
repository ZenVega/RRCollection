import { combineReducers } from 'redux';
import collectionReducer from './collectionReducer';
import recordReducer from './recordReducer';
import { sortByReducer, addReducer, showEditorReducer }from './switchReducers';
import { variableReducer } from './varReducer';

const allReducers = combineReducers({
  collection: collectionReducer,
  record: recordReducer,
  sortBy: sortByReducer,
  add: addReducer,
  variables: variableReducer,
  editor: showEditorReducer
});

export default allReducers;