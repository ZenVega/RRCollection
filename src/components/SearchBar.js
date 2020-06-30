import React, {useState} from 'react';
import { sortByArtist, sortByTitle } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { addRecord } from '../actions';

  const search = (e, onSearch, term) => {
    e.preventDefault();
    onSearch(term);
  }

  const changeHandler = (e, setTerm) => {
    setTerm(e.target.value);
  }


function Searchbar ({onSearch, showEditor}) {
  const records = useSelector(state => state.collection.records);
  const dispatch = useDispatch();
  const [term, setTerm] = useState("I wanna know all about...");

  const openEditor = () => {
    console.log(records)
    dispatch(addRecord());
    showEditor();
  }

  return(
    <div className="Searchbar">
      <form 
        onSubmit={e => search(e, onSearch, term)}>
        <input 
        placeholder="I wanna know all about..."
        onChange={e => changeHandler(e, setTerm)}
        type="text"/>
        <button type="submit" >Search</button>
      </form>
      <div>
      <label>sort by:</label>
      <button onClick={() => dispatch(sortByArtist())}>artist</button>
      <button onClick={() => dispatch(sortByTitle())}>title</button>
      </div>
      <button onClick={() => openEditor()} >add new record</button>
    </div>
  )
}

export default Searchbar;