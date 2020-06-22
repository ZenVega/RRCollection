import React from 'react';
import Record from './Record';

let type = "master";

const presentResults = (results, onAdd) => {
  if(!results){
    return;
  } else {
    console.log(results);
    const filterArtist = result => result.type !== "artist";
    const filterMaster = result => result.type !== "release";
    let filtered = results.filter(filterArtist).filter(filterMaster);
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

function SearchResults({results, sort, onAdd}) {
  return(
    <div className="searchResults">
      <div className="sortBy">
        {/* <label htmlFor="">show:</label>
      <button value="type" onClick={(e) => sort(e.target.value)}>All</button>
      <button value="artist" onClick={(e) => sort(e.target.value)}>Artists</button>
      <button value="title" onClick={(e) => sort(e.target.value)}>Records</button> */}
      </div>
      
      <div className="Wrapper">
        {presentResults(results, type, onAdd)} 
      </div>
    </div>
  )
}

export default SearchResults;