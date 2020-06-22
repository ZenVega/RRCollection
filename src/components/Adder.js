/* eslint-disable default-case */
import React, {useState} from 'react';

function Adder({onAdd}){

  const [title, setTitle] = useState("Title");
  const [artist, setArtist] = useState("Artist");
  const [year, setYear] = useState("Year");
  const [label, setLabel] = useState("Label");
  const [size, setSize] = useState("Size");

  const handleChange = (e) => {
    console.log('change')
    switch(e.target.name){
      case "addTitle":
      setTitle(e.target.value)
      break;
      case "addArtist":
      setArtist(e.target.value);
      break;
      case "addYear":
      setYear(e.target.value);
      break;
      case "addLabel":
      setLabel(e.target.value);
      break;
      case "addSize":
      setSize(e.target.value);
      break;
    }
  }

  const addItem = (e) => {
    e.preventDefault();
    console.log(title, artist);
    onAdd(artist,title, year, label, size);
    console.log("passed to app.js")
  }

  return(
    <div className="Adder">
      <form onSubmit={e => addItem(e)}>
        <input 
          type="text"
          name="addTitle"
          onChange={e => handleChange(e)}
          placeholder="Title"/>  
        <input 
          type="text"
          name="addArtist"
          onChange={e => handleChange(e)}
          placeholder="Artist"/> 
        <input 
          type="number"
          name="addYear"
          onChange={e => handleChange(e)}
          placeholder="Year"/> 
        <input 
          type="text"
          name="addLabel"
          onChange={e => handleChange(e)}
          placeholder="Label"/> 
        <select 
          name="addSize" 
          placeholder="size"
          onChange={e => handleChange(e)}>
          <option value="12">12"</option>
          <option value="10">10"</option>
          <option value="7">7"</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
    
  )
}

export default Adder;