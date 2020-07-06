import React from 'react';
import Record from './Record';
import { useSelector } from 'react-redux';



function Collection () {

  let {artists, labels, records} = useSelector(state => state.collection);

  let sortByTerm = useSelector(state => state.dashboard.sortBy)

    let newOrder = records.sort((a, b) => {
      let objA;
      let objB;

      if(sortByTerm === 'title'){
        objA = a.title.toUpperCase();
        objB = b.title.toUpperCase();  
      } else if(sortByTerm === 'artist'){
        objA = artists.find(artist => artist.artistID === a.artistID).name.toUpperCase();
        objB = artists.find(artist => artist.artistID === b.artistID).name.toUpperCase();
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
      {newOrder.map(record => (
      <Record id={record.id}
        />
    ))}
    </div>
  )
}
export default Collection;