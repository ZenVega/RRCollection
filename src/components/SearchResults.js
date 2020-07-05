import React from 'react';
import Record from './Record';

// ADD VINYL FILTER

let type = "master";

const presentResults = (results) => {
  if(!results){
    return;
  } else {
    const filterArtist = result => result.type !== "artist";
    const filterResults = result => result.type !== "results";
   /*  const filterVinyl = result => result.format[0] === 'Vinyl'; */
    let filtered = results.filter(filterArtist).filter(filterResults)/* .filter(filterVinyl) */;
    console.log(filtered);

    return filtered.map((record, index) => {
      return <Record 
        key={record.id}
        index={index}
        title={record.title} 
        year={record.year}
        label={record.label}
        size={record.format}
        hiddenWhenSearchresult={{display: 'none'}}
        img={record.cover_image}/>
    })
  }
}



function SearchResults({results, onAdd, isHidden}) {
  return(
    <div className="searchResults">
      <div className="Wrapper" style={{isHidden}}>
        {presentResults(results, type, onAdd)} 
      </div>
    </div>
  )
}

export default SearchResults;