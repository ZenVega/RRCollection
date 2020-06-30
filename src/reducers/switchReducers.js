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

export const addReducer =(state = 'add', action) => {
  switch (action.type){
    case 'ADD_RECORD':
      return state = 'add';
    case 'EDIT_RECORD':
      return state = 'edit';
    default:
      return state;
  }
}

