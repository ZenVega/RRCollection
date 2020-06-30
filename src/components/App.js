//EDITOR WIRD 2X GEMOUNTED
// Edit record löscht nicht die alte platte



import React, { useState} from 'react';
import Searchbar from './SearchBar';
import Editor from './Editor';
import Collection from './Collection';
import SearchResults from './SearchResults';
import Discogs from './util/Discogs';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { changeArtist, changeLabel, changeSize, changeTitle, changeYear, addNewRecord, addNewLabel, addNewArtist } from '../actions';



function App() {

  const records = useSelector(state => state.collection.records)
  const labels = useSelector(state => state.collection.labels)
  const artists = useSelector(state => state.collection.artists)
  const dispatch = useDispatch();

/*   const version = useSelector(state => state.add); */

  const [search, setSearch] = useState([]);
  const [type, setType] = useState("release_title");
  const [hidden, setHidden] = useState({display: 'none'});

  

  const handleSearch = (term, type) => {
    Discogs.search(term, type).then(response => setSearch(response.results));
  }

  const sortBy = (interest) => {
      setType(interest)
  }

  const addRecord = (artist, title, year, label, size) => {

    let artistID;
    let artistObj = artists.find(inListArtist => inListArtist.name === artist);
    if(artistObj){
      artistID = artistObj.artistID;
    }

    if(!artistID){
      artistID = Math.floor(Math.random()*10*1000);

      const artistToAdd = {
        name: artist,
        artistID: artistID
      };
      dispatch(addNewArtist(artistToAdd))
    }


    let labelID;
    let labelObj = labels.find(inListLabel => inListLabel.name === label);
    if(labelObj){
      labelID = labelObj.labelID;
    }

    if(!labelID){
      labelID = Math.floor(Math.random()*10*1000);

      const labelToAdd = {
        name: label,
        labelID: labelID
      };
      dispatch(addNewLabel(labelToAdd))
    }


    const recordToAdd = {
      artistID,
      title,
      year,
      size,
      labelID
    };

    dispatch(addNewRecord(recordToAdd));
  }


  const showEditor = (index) => {
    if(index){
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
   setHidden({ display: "flex" });
  }


  return (
    <div className="App">
      <Searchbar 
        searchFor={type}
        onSearch={handleSearch}
        showEditor={showEditor}
        />
      <Editor
        style={hidden}
        setHidden={setHidden}
        onAdd={addRecord} 
      />
      <SearchResults 
        isHidden={hidden} 
        results={search} 
        onAdd={addRecord}
        sort={sortBy}/>
      <Collection 
        showEditor={showEditor}
        labels={labels}
        artists={artists}
        records={records}/>
    </div>
  );
}

export default App;