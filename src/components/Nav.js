import React, {useState} from 'react';
import Discogs from './util/Discogs';
import { sortByArtist, sortByTitle } from '../actions';
import { useDispatch } from 'react-redux';
import { addRecord } from '../actions';
import { showEditor, updateSearchResults} from '../actions';


const changeHandler = (e, setTerm) => {
  setTerm(e.target.value);
}


const Nav = () => {

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

  const handleSearch = (e,term) => {
    e.preventDefault();
    Discogs.search(term)
    .then(response => dispatch(updateSearchResults(response.results)));
  }

  const openEditor = () => {
    dispatch(addRecord());
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