import React, {useState} from 'react';


  const search = (e, onSearch, term) => {
    e.preventDefault();
    onSearch(term);
  }

  const changeHandler = (e, setTerm) => {
    setTerm(e.target.value);
  }


  

function Searchbar ({onSearch, showEditor}) {
  const [term, setTerm] = useState("I wanna know all about...");

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
      <button onClick={() => showEditor("add")} >AddRecord</button>
    </div>
  )
}

export default Searchbar;