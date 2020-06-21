import React, { useState} from 'react';
import Searchbar from './SearchBar';
import Collection from './Collection'
import SearchResults from './SearchResults';
import Adder from './Adder';
import Discogs from './util/Discogs'
import './App.css';


function App() {

  const [search, setSearch] = useState({});

  const [records, setRecords] = useState([
    { artist: "artist1",
      title: "title1",
      year: 2020,
      label: "UrsiRecs",
      size: 12
    },
    { artist: "artist2",
      title: "title2",
      year: 2010,
      label: "UrsiShrecs",
      size: 12
    },
    { artist: "artist3",
      title: "title3",
      year: 2022,
      label: "Records",
      size: 7
    },
  ]);

  const handleSearch = (term) => {
    Discogs.search(term).then(response => {console.log(response.results); setSearch(response.results)});
  }

  const addRecord = (artist, title, year, label, size) => {
    const recordList = [...records, {
      artist,
      title,
      year,
      label,
      size
    }];
    console.log("now update")
    setRecords(recordList);
  };

  const removeRecord = index => {
    const recordList = [...records];
    recordList.splice(index, 1);
    setRecords(recordList);

  };

  return (
    <div className="App">
      <Searchbar 
      onSearch={handleSearch}
      />
      <Adder 
      onAdd={addRecord}/>
      <SearchResults 
      results={search}/>
      <Collection 
      records={records}
      removeRecord={removeRecord}/>
    </div>
  );
}


export default App;
