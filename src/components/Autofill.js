import React, {Fragment} from 'react';
import { useDispatch } from 'react-redux';



const changeTerm = (suggestion, setTerm, target, dispatch) =>{
  dispatch(setTerm(suggestion));
  target.style.display ='none';
}

const returnSuggestions = (term, array, setTerm, dispatch) => {

  //find match
  if(!term || typeof term !== 'string'){ return []};
  let suggestions = array.filter(
    string => string.toLowerCase().indexOf(term.toLowerCase()) > -1);

    //return listElement for each suggestion
  return suggestions.map((suggestion, index) => (
  <p key={index} className="suggestion" onClick={e => changeTerm(suggestion, setTerm, e.target, dispatch)}>{suggestion}</p>
  ))
}


function Autofill ({term, array, setTerm}) {

  const dispatch = useDispatch();

  return(
    <Fragment >
      {returnSuggestions(term, array, setTerm, dispatch)}
    </Fragment>
  )

}

export default Autofill;