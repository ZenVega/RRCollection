const initialState = {
  indexOfCurrentRecord: ''
}
export const variableReducer = (state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_INDEX':
      return {
        ...state,
        indexOfCurrentRecord: action.payload
      }
    default:
      return state
  }
}