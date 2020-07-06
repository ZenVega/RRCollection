import React, {Fragment, useState} from 'react';

const InputPlusAutofill = ({term, placeholder, list, handleChange, fromTop}) => {

  const [unclicked, setUnclicked] = useState(true); 
  const [focused, setFocused] = useState(false);
  let suggestions
  if(term){
    suggestions = list.filter(string => string.toLowerCase().indexOf(term.toLowerCase()) > -1);
  }

  return (
    <Fragment>
      <input 
        style={{top: fromTop + 'px'}}
        className="AutofillInput"
        type="text"
        value={term}
        onChange={e => {setUnclicked(true); handleChange(e.target.value)}}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
      />  
      <div 
      className="suggestionWrapper"
      style={{top: fromTop + 25 + 'px'}}>
        { term && focused && unclicked && suggestions.map((suggestion, index) => ( 
          <p 
            key={index} 
            className="suggestion" 
            onMouseDown={e => { handleChange(suggestion); setUnclicked(false);  }}
          >
          { suggestion }
          </p>
        ))}
      </div>

    </Fragment>
  )
}

export default InputPlusAutofill;