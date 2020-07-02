const initialState = {
  indexOfCurrentRecord: '',
  imageArray: []
}
export const variableReducer = (state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_INDEX':
      return {
        ...state,
        indexOfCurrentRecord: action.payload
      }
    case 'UPDATE_IMAGE_ARRAY':
      return {
        imageArray: action.payload
      }
    default:
      return state
  }
}