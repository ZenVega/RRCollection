import React, {Fragment, useState} from 'react';

const InputPlusAutofill = ({term, placeholder, list, handleChange}) => {
  let suggestions = list.filter(string => string.toLowerCase().indexOf(term.toLowerCase()) > -1);
  console.log(suggestions)
  const [unclicked, setUnclicked] = useState(true); 
  const [focused, setFocused] = useState(false);

  return (
    <Fragment>
      <input 
        className="AutofillInput"
        type="text"
        value={term}
        onChange={e => {setUnclicked(true); handleChange(e.target.value)}}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
      />  
      <div className="suggestionWrapper">
        { term && focused && unclicked && suggestions.map((suggestion, index) => ( 
          <p 
            key={index} 
            className="suggestion" 
            onClick={e => {setUnclicked(false); handleChange(suggestion)  }}
          >
          { suggestion }
          </p>
        ))}
      </div>

    </Fragment>
  )
}

export default InputPlusAutofill;