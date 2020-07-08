import {initialCollectionState} from './initialState';

 const collectionReducer = ( state = initialCollectionState, action) =>{
  switch(action.type){
    case 'ADD_RECORD':
      return {
        ...state, 
          records: {
          ...state.records,
          [action.id]: action.payload,
          recordIDs: state.records.recordIDs.concat(action.id)          },
      }
    case 'ADD_LABEL':
      return {
        ...state, 
          labels: {
          ...state.labels,
          [action.id] : action.payload
          }
      }
    case 'ADD_ARTIST':
      return {
        ...state, 
        artists: {
          ...state.artists,
          [action.id] : action.payload
        }
      }
    case 'REMOVE_RECORD':
      let recordUpdate = {...state.records}
      delete recordUpdate[action.id]
      recordUpdate.recordIDs = state.records.recordIDs.filter(id => id !== action.id)
      return {
        ...state,
        records: recordUpdate
        }
    case 'EDIT_RECORD':
      return {
        ...state, 
        records: {
          ...state.records,
          [action.id] : action.payload
        }
      }
    default:
      return state;
  }
};

export default collectionReducer;