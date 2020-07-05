import React, {useState} from 'react';
import Discogs from './util/Discogs';
import { sortByArtist, sortByTitle } from '../actions';
import { useDispatch } from 'react-redux';
import { addRecord } from '../actions';
import { changeArtist, changeLabel, changeSize, changeTitle, changeYear , showEditor} from '../actions';

const search = (e, onSearch, term) => {
  e.preventDefault();
  onSearch(term);
}

const changeHandler = (e, setTerm) => {
  setTerm(e.target.value);
}

const handleSearch = (e,term) => {
  e.preventDefault();
  Discogs.search(term)
  .then(response => response.results);
}



function Nav ({onSearch}) {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("I wanna know all about...");
  
  const [navBtn, setNavBtn] = useState({
    searchResults: 'navBtn',
    collection: 'navBtn active'
  });
  
  const toggleToSearch = e => {
    e.preventDefault();
      setNavBtn ({
        searchResults: 'navBtn active',
        collection: 'navBtn'
        })

  }
  
  const toggleToCollection = e => {
    e.preventDefault();
      setNavBtn ({
        searchResults: 'navBtn',
        collection: 'navBtn active'
        })

  }

  const openEditor = () => {
    console.log('open')
    dispatch(addRecord());
    dispatch(changeTitle(''));
    dispatch(changeYear(''));
    dispatch(changeSize('12'));
    dispatch(changeArtist(''));
    dispatch(changeLabel(''));
    dispatch(showEditor());
  }

  return(
    <div className="Nav">
      <div>
      <form 
        onSubmit={e => handleSearch(e,term)}>
      <input 
        placeholder="I wanna know all about..."
        onChange={e => changeHandler(e, setTerm)}
        type="text"/>
      <button type="submit" >Search</button>
      </form>
      </div>

      <div>
        <button
          onClick={e => toggleToCollection(e)}
          className={navBtn.collection} >Collection</button>
        <button
          onClick={e => toggleToSearch(e)}
          className= {navBtn.searchResults} >search results</button>
      </div>


      <div className="sortBy">
        <label>sort by: 
          <button onClick={() => dispatch(sortByArtist())}>artist</button>
          <button onClick={() => dispatch(sortByTitle())}>title</button>
        </label>
      </div>

      <div>
      <button onClick={() => openEditor()} >add new record</button>
      </div>
    </div>
  )
}

export default Nav;