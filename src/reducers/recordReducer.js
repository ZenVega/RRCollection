import {initialRecordState} from './initialState';

const recordReducer = (state = initialRecordState, action) => {
  switch(action.type){
    case 'CHANGE_TITLE':
     return {...state,
     title: action.payload}
    case 'CHANGE_ARTIST':
      return {...state,
        artist: action.payload}
    case 'CHANGE_YEAR':
      return {...state,
        year: action.payload}
    case 'CHANGE_LABEL':
      return {...state,
        label: action.payload}
    case 'CHANGE_SIZE':
      return {...state,
        size: action.payload}
    default: return state;
  }
}

export default recordReducer;