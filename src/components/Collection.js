import React from 'react';
import Record from './Record';
import { useSelector } from 'react-redux';



function Collection () {

  let {artists, records} = useSelector(state => state.collection);
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
        />
    ))}
    </div>
  )
}
export default Collection;