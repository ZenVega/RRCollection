import React, {Fragment} from 'react';

const Autofill = ({term, list, onClickSuggestion}) => {

  let suggestions = list.filter(string => string.toLowerCase().indexOf(term.toLowerCase()) > -1);

  return term && (
    <Fragment>
      { suggestions.map((suggestion, index) => ( 
      <p 
        key={index} 
        className="suggestion" 
        onClick={e => onClickSuggestion(suggestion) }
      >
        { suggestion }
      </p>
      ))}
    </Fragment>
  )
}

export default Autofill;