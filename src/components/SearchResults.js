import React from 'react';
import Record from './Record';


function SearchResults({results, isHidden}) {

  const presentResults = (results) =>{
    if(!results){
      return;
    } else {
      results.map((record, index) => {
        return <Record 
          key={index}
          index={index}
          title={record.title} 
          year={record.year}/>
      })
    }

    
  }

  return(
    <div className="searchResults">
      <div className="wrapper">
        {presentResults}
      </div>
    </div>
  )
}

export default SearchResults;