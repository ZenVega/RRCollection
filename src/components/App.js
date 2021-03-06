//EDITOR WIRD 2X GEMOUNTED
//deactivate autofill from browser
//komplett auf redux umstellen bzw state/let/selector mischen?



// Show Artists
// Show Labels
// Add database

import React, { useState} from 'react';
import Nav from './Nav';
import Editor from './Editor';
import Collection from './Collection';
import SearchResults from './SearchResults';
import Discogs from './util/Discogs';
import './App.css';



function App() {
  
  const [search, setSearch] = useState([]);

  const handleSearch = (term) => {
    Discogs.search(term)
    .then(response => setSearch(response.results));
  }


  return (
    <div className="App">
      <Nav onSearch={handleSearch}/>
      <Editor/>
      <SearchResults 
        results={search} />
      <Collection />
    </div>
  );
}


export default App;