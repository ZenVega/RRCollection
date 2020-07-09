export const sortByReducer =(state = 'artist', action) => {
  switch (action.type){
    case 'SORT_BY_ARTIST':
      return state = 'artist';
    case 'SORT_BY_TITLE':
      return state = 'title';
    default:
      return state;
  }
}

export const addReducer =(state = {mode: 'add'}, action) => {
  switch (action.type){
    case 'ADD_CURRENT_RECORD':
      return {mode: 'add'};
    case 'EDIT_CURRENT_RECORD':
      return {mode:'edit', id: action.payload}
    case 'ADD_CURRENT_RECORD_FROM_SEARCH':
      return {mode:'addFromSearch', searchResult: action.payload}
    default:
      return state;
  }
}

export const showEditorReducer = (state = false, action) => {
  switch (action.type){
    case 'SHOW_EDITOR':
      return true
    case 'HIDE_EDITOR':
      return false
    default: 
      return state
  }
}