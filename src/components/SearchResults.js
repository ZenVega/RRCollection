import React from 'react';
import Record from './Record';

let type = "master";

const presentResults = (results, onAdd) => {
  if(!results){
    return;
  } else {
    console.log(results);
    const filterArtist = result => result.type !== "artist";
    let filtered = results.filter(filterArtist);
    console.log(filtered);
    return filtered.map((record, index) => {
      return <Record 
        key={record.id}
        index={index}
        title={record.title} 
        onAdd={onAdd}
        year={record.year}
        img={record.cover_image}/>
    })
  }
}


function SearchResults({results, sort, onAdd, isHidden}) {
  return(
    <div className="searchResults">
      <div className="Wrapper" style={{isHidden}}>
        {presentResults(results, type, onAdd)} 
      </div>
    </div>
  )
}

export default SearchResults;