
  
export const indexReducer = (state = '', action) => {
  switch(action.type){
    case 'UPDATE_INDEX':
        return state = action.payload;

      default:
        return state
     }
  }

export const updateImageReducer = (state = ['./norecord.png'], action) => {
  switch(action.type){
    case 'UPDATE_IMAGE_ARRAY':
      return  state = action.payload;
      default:
        return state
  }
}


const initialStateofPicSelector = {
  findBtn: {display: 'block'},
  urlInput: {top: '46%'},
  preNxt : {display: 'none'},
  previewImage: {opacity: 0.5}
}

export const updatePicSelectorStyle = (state = initialStateofPicSelector, action) => {
  switch(action.type){
    case 'UPDATE_PIC_SELECTOR_STYLE':
      return  { ...state,
        [action.key]: action.payload}

      default:
        return state
  }
}
    




            