//EDITOR WIRD 2X GEMOUNTED
//deactivate autofill from browser
//sortBy auch für searchresults
//show more results
//label array bei suche verwalten

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

  return (
    <div className="App">
      <Nav/>
      { showEditor && <Editor/> }
      {colSearchSwitch === 'col'? <Collection /> : <SearchResults />}
    </div>
  );
}


export default App;