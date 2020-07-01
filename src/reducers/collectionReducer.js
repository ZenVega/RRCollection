import {initialCollectionState} from './initialState';


 const collectionReducer = ( state = initialCollectionState, action) =>{
  switch(action.type){
    case 'ADD_RECORD':
      return {
        ...state, 
        records: state.records.concat(action.payload)
      }
    case 'ADD_LABEL':
      return {
        ...state, 
        labels: state.labels.concat(action.payload)
      }
    case 'ADD_ARTIST':
      return {
        ...state, 
        artists: state.artists.concat(action.payload)
      }
    case 'REMOVE_RECORD':
      return {
        ...state, 
        records: state.records.filter((record, index) => index !== action.payload)
      }
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