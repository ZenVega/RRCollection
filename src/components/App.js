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
  const records = useSelector(state => state.collection.records);
  const labels = useSelector(state => state.collection.labels);
  const artists = useSelector(state => state.collection.artists);

  const [search, setSearch] = useState([]);

  const handleSearch = (term) => {
    Discogs.search(term).then(response => setSearch(response.results));
  }

 /*  Covers.search('vug+onyx+cover'); */

  const displayEditor = (index) => {
    console.log('editor')
    if(index !== undefined){
      
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
        onSearch={handleSearch}
        showEditor={displayEditor}/>
      <Editor/>
      <SearchResults 
        results={search} />
      <Collection 
        showEditor={displayEditor}
        labels={labels}
        artists={artists}/>
    </div>
  );
}

export default App;