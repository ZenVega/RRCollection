/* eslint-disable default-case */
import React, { useState } from 'react';
import Autofill from './Autofill';

function Editor({onAdd, onRemove, index, titles, artists, labels, style, version, setHidden}){

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [label, setLabel] = useState("");
  const [size, setSize] = useState("12");



  const handleChange = (e) => {

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


    if(typeof index === 'number'){
      console.log("delete")
      onRemove(index);
    }
    e.preventDefault();
    onAdd(artist,title, year, label, size);
    setHidden( {display: "none" });
  }


  return(
    <div>
      <form className="Editor"
            style={style}
            onSubmit={e => addItem(e)}>
        <h2> {version.header}</h2>
        <div className="inputWrapper">
          <input 
            type="text"
            name="addTitle"
            value={title}
            onChange={e => handleChange(e)}
            placeholder="Title"/>  
          <Autofill
            className="Autofill"
            term={title}
            array={titles} 
            setTerm={setTitle}/>
        </div>
        <div className="inputWrapper">
          <input 
            type="text"
            name="addArtist"
            value={artist}
            onChange={e => handleChange(e)}
            placeholder="Artist"/> 
             <Autofill
             className="Autofill"
             term={artist}
             array={artists} 
             setTerm={setArtist}/>
          </div>
        <div className="inputWrapper">
          <input 
            type="number"
            name="addYear"
            onChange={e => handleChange(e)}
            placeholder="Year"/> 
          </div>
        <div className="inputWrapper">
          <input 
            type="text"
            name="addLabel"
            value={label}
            onChange={e => handleChange(e)}
            placeholder="Label"/> 
          <Autofill
            className="Autofill"
            term={label}
            array={labels} 
            setTerm={setLabel}/>
        </div>
        <div className="inputWrapper">
          <select 
            name="addSize" 
            value={size}
            onChange={e => handleChange(e)}>
            <option value="12">12"</option>
            <option value="10">10"</option>
            <option value="7">7"</option>
          </select>
        </div>
        <div className="inputWrapper">
  <button 
  onSubmit={addItem}
  type="submit" >{version.button}</button>
  <button onClick={() => setHidden( {display: "none" })}>✖︎</button>
        </div>
      </form>
    </div>
  )
}

export default Editor;