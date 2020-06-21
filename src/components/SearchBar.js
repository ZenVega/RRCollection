import React, {useState} from 'react';
import Discogs from './util/Discogs'

function Searchbar () {

  const [term, setTerm] = useState("I wanna know all about...");


  const onSearch = (e) => {
    e.preventDefault();
    Discogs.search(term).then(response => console.log(response))
  }

  const changeHandler = (e) => {
    setTerm(e.target.value);
  }

  
  return(
    <div className="Searchbar">
      <form 
        onSubmit={e => onSearch(e)}>
        <input 
        placeholder="I wanna know all about..."
        onChange={e => changeHandler(e)}
        type="text"/>
        <button type="submit" >Search</button>
      </form>
    </div>
  )
}

export default Searchbar;