const searchResultsReducer = (state = {response: []}, action) => {
  switch(action.type){
    case 'UPDATE_SEARCH_RESULTS':
     return action.payload
    default: return state;
  }
}

export default searchResultsReducer;