import React from 'react';
import Record from './Record';


function SearchResults({results}) {
  return(
    <div>
      {results.map((result, index) => (
        <Record 
          key={index}/>
      ))}
    </div>
  )
}

export default SearchResults;