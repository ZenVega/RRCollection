import React from 'react';
import Record from './Record';
import {useSelector} from 'react-redux'


function SearchResults() {

  const results = useSelector(state => state.dashboard.searchResults);

  const filterArtist = result => result.type !== "artist";
  const filterResults = result => result.type !== "results";
  const filterMedia = result => result.format;
  const filterVinyl = result => result.format[0] === 'Vinyl';

  let filtered = results.filter(filterArtist).filter(filterResults).filter(filterMedia).filter(filterVinyl);
console.log(filtered)

  return results && (
    <div className="searchResults">
      <div className="Wrapper" >
        {filtered.map(record => {
          let searchResult = {
            artist: record.title.substring(0, record.title.indexOf(' - ')),
            title: record.title.substring(record.title.indexOf(' - ')+3),
            year: record.year,
            label: record.label.filter((label, index) => index<5).join(' | '),
            size: record.format? record.format[1] : '',
            cover_image: record.cover_image
          }
          let artist = record.title.substring(0, record.title.indexOf(' - '))
          let title = record.title.substring(record.title.indexOf(' - ')+3)
          return <Record 
            key={record.id}
            artist={artist}
            searchResult={searchResult}
            title={title} 
            year={record.year}
            label={record.label.filter((label, index) => index<5).join(' | ')}
            size={record.format? record.format[1] : ''}
            img={record.cover_image}/>
          })} 
      </div>
    </div>
  )
}

export default SearchResults;