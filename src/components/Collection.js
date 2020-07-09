import React from 'react';
import Record from './Record';
import { useSelector } from 'react-redux';

//COLLECTION WIRD 2X GEMOUNTED"

function Collection () {

  let {artists, records, labels} = useSelector(state => state.collection);
  let sortByTerm = useSelector(state => state.dashboard.sortBy); 

    let newOrder = records.recordIDs.sort((a, b) => {
      let objA;
      let objB;

      if(sortByTerm === 'title'){
        objA = records[a].title.toUpperCase();
        objB = records[b].title.toUpperCase();  

      } else if(sortByTerm === 'artist'){
        objA = artists[records[a].artistID].name.toUpperCase();
        objB = artists[records[b].artistID].name.toUpperCase();
      }
      
      let comparison = 0;
      if (objA > objB) {
        comparison = 1;
      } else if (objA < objB) {
        comparison = -1;
      }
      return comparison;
    });


  return(
    <div className="Collection">
      {newOrder.map((id, index) => (
      <Record 
      key={index}
      id={id}
      title={records[id].title}
      artist={artists[records[id].artistID].name}
      label={labels[records[id].labelID].name}
      size={records[id].size}
      year={records[id].year}
      img={records[id].cover_image}
        />
    ))}
    </div>
  )
}
export default Collection;