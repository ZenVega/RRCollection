//EDITOR WIRD 2X GEMOUNTED
// Add covers
// Add database

import React, { useState} from 'react';
import Searchbar from './SearchBar';
import Editor from './Editor';
import Collection from './Collection';
import SearchResults from './SearchResults';
import Discogs from './util/Discogs';
import Covers from './util/ImageSearch'
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { changeArtist, changeLabel, changeSize, changeTitle, changeYear , showEditor} from '../actions';


function App() {
  
  const dispatch = useDispatch();
  const records = useSelector(state => state.collection.records)
  const labels = useSelector(state => state.collection.labels)
  const artists = useSelector(state => state.collection.artists)
  const hidden = useSelector(state => state.editor);

  const [search, setSearch] = useState([]);
  const [type, setType] = useState("master");

  const sortBy = (interest) => {
      setType(interest)
  }

  const handleSearch = (term, type) => {
    Discogs.search(term, type).then(response => setSearch(response.results));
  }

 /*  Covers.search('vug+onyx+cover'); */

  const displayEditor = (index) => {
    console.log('editor')
    if(index !== undefined){
      dispatch(changeTitle(records[index].title));
      dispatch(changeYear(records[index].year));
      dispatch(changeSize(records[index].size));
      dispatch(changeArtist(artists.filter(artist => artist.artistID === records[index].artistID)[0].name));
      dispatch(changeLabel(labels.filter(label => label.labelID === records[index].labelID)[0].name));
    } else {
      dispatch(changeTitle(''));
      dispatch(changeYear(''));
      dispatch(changeSize('12'));
      dispatch(changeArtist(''));
      dispatch(changeLabel(''));
    }
   dispatch(showEditor());
  }


  return (
    <div className="App">
      <Searchbar 
        searchFor={type}
        onSearch={handleSearch}
        showEditor={displayEditor}/>
      <Editor
        style={hidden}/>
      <SearchResults 
        results={search} 
        sort={sortBy}/>
      <Collection 
        showEditor={displayEditor}
        labels={labels}
        artists={artists}/>
    </div>
  );
}

export default App;