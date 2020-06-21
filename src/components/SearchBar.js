import React, {useState} from 'react';


function Searchbar ({onSearch}) {

  const [term, setTerm] = useState("I wanna know all about...");

  const search = (e) => {
    e.preventDefault();
    onSearch(term);
  }

  const changeHandler = (e) => {
    setTerm(e.target.value);
  }

  
  return(
    <div className="Searchbar">
      <form 
        onSubmit={e => search(e)}>
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