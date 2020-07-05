import { combineReducers } from 'redux';
import collectionReducer from './collectionReducer';
import recordReducer from './recordReducer';
import { sortByReducer, addReducer, showEditorReducer }from './switchReducers';
import { updatePicSelectorStyle,indexReducer, updateImageReducer } from './varReducer';

const allReducers = combineReducers({
  collection: collectionReducer,
  record: recordReducer,
  sortBy: sortByReducer,
  add: addReducer,
  currentIndex: indexReducer,
  imageArray: updateImageReducer,
  editor: showEditorReducer,
  picSelectorStyle: updatePicSelectorStyle
});

export default allReducers;