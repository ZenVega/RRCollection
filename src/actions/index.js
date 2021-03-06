//COLLECTION ACTIONS

export const addNewRecord = obj => {
  return{
    type: 'ADD_RECORD',
    payload: obj
  }
}
export const addNewLabel = obj => {
  return{
    type: 'ADD_LABEL',
    payload: obj
  }
}
export const addNewArtist = obj => {
  return{
    type: 'ADD_ARTIST',
    payload: obj
  }
}
export const removeRecord = id => {
  return{
    type: 'REMOVE_RECORD',
    payload: id
  }
}
export const editExistingRecord = (id, obj) => {
  return{
    type: 'REMOVE_RECORD',
    payload: id,
    data: obj
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
export const changeImage = term => {
  console.log(term)
  return{
    type: 'CHANGE_IMAGE',
    payload: term
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
export const editRecord = () => {
  return {
    type: 'EDIT_CURRENT_RECORD'
  }
}

//EDITOR ACTION

export const showEditor = () => {
  return {
    type: 'SHOW_EDITOR'
  }
}
export const hideEditor = () => {
  return {
    type: 'HIDE_EDITOR'
  }
}

// VARIABLE ACTION
  export const updateIndex = (nr) => {
    return {
      type: 'UPDATE_INDEX',
      payload: nr
    }
  }

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