//COLLECTION ACTIONS

export const addNewRecord = (id, obj) => {
  return{
    type: 'ADD_RECORD',
    payload: obj,
    id
  }
}
export const addNewLabel = (id, obj) => {
  return{
    type: 'ADD_LABEL',
    payload: obj,
    id
  }
}
export const addNewArtist = (id, obj) => {
  return{
    type: 'ADD_ARTIST',
    payload: obj,
    id
  }
}
export const removeRecord = id => {
  return{
    type: 'REMOVE_RECORD',
    id
  }
}


// CURRENT RECORD ACTIONS

export const changeTitle = term => {
  return{
    type: 'CHANGE_TITLE',
    payload: term
  }
}
export const changeArtist = term => {
  return{
    type: 'CHANGE_ARTIST',
    payload: term
  }
}
export const changeLabel = term => {
  return{
    type: 'CHANGE_LABEL',
    payload: term
  }
}
export const changeYear = term => {
  return{
    type: 'CHANGE_YEAR',
    payload: term
  }
}
export const changeSize = term => {
  return{
    type: 'CHANGE_SIZE',
    payload: term
  }
}
export const addID = term => {
  return{
    type: 'CHANGE_id',
    payload: term
  }
}
export const changeImage = term => {
  console.log(term)
  return{
    type: 'CHANGE_IMAGE',
    payload: term
  }
}
export const updateRecordInProgress = obj => {
  return {
    type: 'UPDATE_REC_IN_PROG',
    payload: obj
  }
}

// SORTBY ACTIONS

export const sortByArtist = () => {
  return {
    type: 'SORT_BY_ARTIST'
  }
}
export const sortByTitle = () => {
  return {
    type: 'SORT_BY_TITLE'
  }
}

// ADD ACTIONS

export const addRecord = () => {
  return {
    type: 'ADD_CURRENT_RECORD'
  }
}
export const editRecord = (id) => {
  return {
    type: 'EDIT_CURRENT_RECORD',
    payload: id
  }
}

//EDITOR ACTION

export const showEditor = () => {
  return {
    type: 'SHOW_EDITOR',
  }
}
export const hideEditor = () => {
  return {
    type: 'HIDE_EDITOR'
  }
}

// VARIABLE ACTION

  export const updateImageArray = (arr) => {
    return {
      type: 'UPDATE_IMAGE_ARRAY',
      payload: arr
    }
  }
  export const updatePicSelectorStyle = (key, obj) => {
    return {
      type: 'UPDATE_PIC_SELECTOR_STYLE',
      payload: obj,
      key
    }
  }
  
  // SEARCHRESULTS ACTION

    export const updateSearchResults = (arrayOfObjects) => {
      return {
        type: 'UPDATE_SEARCH_RESULTS',
        payload: arrayOfObjects
      }
    }