import React from 'react';
import Record from './Record';
import { useSelector } from 'react-redux';



function Collection (){

  let artists = useSelector(state => state.collection.artists);
  let labels = useSelector(state => state.collection.labels);
  let records = useSelector(state => state.collection.records);
  let sortByTerm = useSelector(state => state.sortBy)

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

  const sortBy = (term) => {

    let newOrder = records.sort((a, b) => {
      let objA;
      let objB;

      if(term === 'title'){
        objA = a.title.toUpperCase();
        objB = b.title.toUpperCase();  
      } else if(term === 'artist'){
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


    return newOrder.map((record, index) => (
      <Record 
        key={index}
        index={index}
        artist={displayArtist(record.artistID)}
        title={record.title}
        year={record.year}
        label={displayLabel(record.labelID)}
        size={record.size}
        img={record.cover_img}
        />
    ))
  }

 
  return(
    <div className="Collection">
      {sortBy(sortByTerm)}
    </div>
  )
}
export default Collection;