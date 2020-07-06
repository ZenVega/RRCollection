import { combineReducers } from 'redux';
import collectionReducer from './collectionReducer';
import recordReducer from './recordReducer';
import { sortByReducer, addReducer, showEditorReducer }from './switchReducers';
import { updatePicSelectorStyle,indexReducer, updateImageReducer } from './varReducer';
import searchResultsReducer from './searchResultsReducer';

const dashboard = combineReducers({
  sortBy: sortByReducer,
  searchResults: searchResultsReducer
})

const editor = combineReducers({
    show: showEditorReducer,
    setup: addReducer,
    recordInProgress: recordReducer,
    currentIndex: indexReducer,
    imageSearch: updateImageReducer,
    picSelectorStyle: updatePicSelectorStyle
})

const allReducers = combineReducers({
  collection: collectionReducer,
  dashboard,
  editor
});
export default allReducers;




const oldReducers = combineReducers({
  collection: collectionReducer,
    sortBy: sortByReducer,
    searchResults: searchResultsReducer,
    record: recordReducer,
    add: addReducer,
    currentIndex: indexReducer,
    imageArray: updateImageReducer,
    editor: showEditorReducer,
    picSelectorStyle: updatePicSelectorStyle,
});



// const state = {
//   collections: {
//     records: [],
//     artists: [],
//     labels: []
//   },
//   dashboard: {
//     sortBy: "artist",
//     search: "asdhjasd",
//     activeView: "collection"
//   },
//   editor: {
//     isAdd: false;
//     show: false,
//     record: {
//       index: 2,
//       title: "asd",
//       year: 2018
//     }
//   },
// }
