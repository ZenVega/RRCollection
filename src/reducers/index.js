import { combineReducers } from 'redux';
import collectionReducer from './collectionReducer';
import recordReducer from './recordReducer';
import { sortByReducer, addReducer }from './switchReducers';

const allReducers = combineReducers({
  collection: collectionReducer,
  record: recordReducer,
  sortBy: sortByReducer,
  add: addReducer
});

export default allReducers;