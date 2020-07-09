import { combineReducers } from 'redux';
import collectionReducer from './collectionReducer';
import recordReducer from './recordReducer';
import { sortByReducer, addReducer, showEditorReducer, switchColSearchReducer }from './switchReducers';
import { indexReducer, updateImageReducer } from './varReducer';
import searchResultsReducer from './searchResultsReducer';

const dashboard = combineReducers({
  sortBy: sortByReducer,
  searchResults: searchResultsReducer,
  colSearchSwitch: switchColSearchReducer
})

const editor = combineReducers({
    show: showEditorReducer,
    setup: addReducer,
    recordInProgress: recordReducer,
    currentIndex: indexReducer,
    imageSearch: updateImageReducer,
})

const allReducers = combineReducers({
  collection: collectionReducer,
  dashboard,
  editor
});
export default allReducers;
