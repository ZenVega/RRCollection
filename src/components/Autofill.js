import React, {Fragment} from 'react';



const changeTerm = (suggestion, setTerm, target) =>{
  setTerm(suggestion);
  target.style.display ='none';
}

const returnSuggestions = (term, array, setTerm) => {

  //find match
  if(!term || typeof term !== 'string'){ return []};
  let suggestions = array.filter(
    string => string.toLowerCase().indexOf(term.toLowerCase()) > -1);

    //return listElement for each suggestion
  return suggestions.map((suggestion, index) => (
  <p key={index} className="suggestion" onClick={e => changeTerm(suggestion, setTerm, e.target)}>{suggestion}</p>
  ))
}


function Autofill ({term, array, setTerm}) {

  return(
    <Fragment >
      {returnSuggestions(term, array, setTerm)}
    </Fragment>
  )

}

export default Autofill;