import React from 'react';
import Record from './Record';


function Collection ({records, removeRecord}){

  return(
    <div className="Collection">
      {records.map((record, index, ) => (
        <Record 
          key={index}
          artist={record.artist}
          title={record.title}
          year={record.year}
          label={record.label}
          size={record.size}
          onRemove={removeRecord}
        />
      ))}
    </div>
  )
}
export default Collection;