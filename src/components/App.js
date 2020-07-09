//EDITOR WIRD 2X GEMOUNTED
//deactivate autofill from browser
//komplett auf redux umstellen bzw state/let/selector mischen?



// Show Artists
// Show Labels
// Add database

import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Nav from './Nav/Nav';
import Editor from './Editor/Editor';
import Collection from './Main/Collection';
import SearchResults from './Main/SearchResults';
import Discogs from './util/Discogs';
import './App.css';

function App() {

const colSearchSwitch = useSelector(state => state.dashboard.colSearchSwitch)
  const showEditor = useSelector(state => state.editor.show);
  const [search, setSearch] = useState([]);

  const handleSearch = (term) => {
    Discogs.search(term)
    .then(response => setSearch(response.results));
  }

  return (
    <div className="App">
      <Nav onSearch={handleSearch}/>
      { showEditor && <Editor/> }
      {colSearchSwitch === 'col'? <Collection /> : <SearchResults 
        results={search} />}
    </div>
  );
}


export default App;