import React from 'react';
import Record from './Record';




function Collection ({records, removeRecord, artists, labels, showEditor}){

  const displayArtist = (id) => {
    let currentArtist = artists.find(artist => artist.artistID === id)
    try{
      return currentArtist.name;
    }catch(err){
      console.log(err)
    }
  }

  const displayLabel = (id) => {
    let currentLabel = labels.find(label => label.labelID === id)
    try{
      return currentLabel.name;
    }catch(err){
      console.log(err)
    }
  }

  return(
    <div className="Collection">
      {records.map((record, index) => (
        <Record 
          showEditor={showEditor}
          key={index}
          artist={displayArtist(record.artistID)}
          title={record.title}
          year={record.year}
          label={displayLabel(record.labelID)}
          size={record.size}
          onRemove={removeRecord}
        />
      ))}
    </div>
  )
}
export default Collection;