
  
export const indexReducer = (state = '', action) => {
  switch(action.type){
    case 'UPDATE_INDEX':
        return state = action.payload;

      default:
        return state
     }
  }

export const updateImageReducer = (state = "", action) => {
  switch(action.type){
    case 'UPDATE_IMAGE_ARRAY':
      return  state = action.payload;
      default:
        return state
  }
}

    




            