import React, { useState} from 'react';
import Searchbar from './SearchBar';
import Collection from './Collection'
import SearchResults from './SearchResults';
import Adder from './Adder';
import Discogs from './util/Discogs'
import './App.css';


function App() {

  const [search, setSearch] = useState([]);
  const [type, setType] = useState("release_title");
  const [hidden, setHidden] = useState("true");

  const [records, setRecords] = useState([
    {
      title:"Chocolate & Cheese",
      artistID: 1,
      labelID: 3,
      year: 2000,
      size: 12
    },
    {
      title:"Quebec",
      artistID: 1,
      labelID: 3,
      year: 2005,
      size: 12
    },
    {
      title:"Selftitled",
      artistID: 2,
      labelID: 1,
      year: 2005,
      size: 12
    },
    
  ]);
  const [artists, setArtists] = useState([
    {
      name: "Ween",
      artistID: 1
    },
    {
      name: "AUS",
      artistID: 2
    }]);

  const [labels, setLabels] = useState([
    {
      name: "static shock",
      labelID: 1
    },
    {
      name: "noise solution",
      labelID: 2
    },
    {
      name: "weenRecs",
      labelID: 3
    }

  ]);

  const handleSearch = (term, type) => {
    hide("true");
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

      const artistsList = [...artists, {
        name: artist,
        artistID: artistID
      }];
      
      setArtists(artistsList);
    }

    let labelID;
    let labelObj = labels.find(inListLabel => inListLabel.name === label);
    if(labelObj){
      labelID = labelObj.labelID;
    }

    if(!labelID){
      labelID = Math.floor(Math.random()*10*1000);

      const labelsList = [...labels, {
        name: label,
        labelID: labelID
      }];
      
      setLabels(labelsList);
    }
    
    const recordList = [...records, {
      artistID,
      title,
      year,
      size,
      labelID
    }];
    setRecords(recordList);
  };

  const removeRecord = index => {
    const recordList = [...records];
    recordList.splice(index, 1);
    setRecords(recordList);

  };

  const hide = (bool) => {
    setHidden(bool);
  }
  console.log('artists', artists);
  console.log('records', records)
  console.log('labels', labels);


  return (
    <div className="App">
      <Searchbar 
        searchFor={type}
        onSearch={handleSearch}
        />
      <Adder onAdd={addRecord} />
      <SearchResults 
        isHidden={hidden} 
        results={search} 
        onAdd={addRecord}
        sort={sortBy}/>
      <Collection 
        labels={labels}
        artists={artists}
        records={records}
        removeRecord={removeRecord}/>
    </div>
  );
}

export default App;