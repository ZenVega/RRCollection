import {initialCollectionState} from './initialState';

 const collectionReducer = ( state = initialCollectionState, action) =>{
  switch(action.type){
    case 'ADD_RECORD':
      return {
        ...state, 
          records: {
          ...state.records,
          [action.id]: action.payload
          },
          recordIDs: state.records.recordIDs.push(action.id)
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
      let recordIDUpdate = state.records.recordIDs.filter(id => id === action.id)
      recordUpdate.recordIDs = recordIDUpdate
      return {
        ...state,
        records: recordUpdate
        }
          
         /* recordIDs: state.records.recordIDs.filter(id => id = action.id) */
      
    case 'EDIT_RECORD':
      return {
        ...state, 
        records: state.records.splice(action.payload)
      }
    default:
      return state;
  }
};

export default collectionReducer;