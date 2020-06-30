/* eslint-disable default-case */
import React from 'react';
import Autofill from './Autofill';
import { useSelector, useDispatch } from 'react-redux';
import { removeRecord, changeArtist, changeLabel, changeSize, changeTitle, changeYear } from '../actions';

function Editor({onAdd, index, style, setHidden}){

  const dispatch = useDispatch();

  const records = useSelector(state => state.collection.records);
  const artists = useSelector(state => state.collection.artists);
  const labels = useSelector(state => state.collection.labels);

  
  const labelNames = labels.map(label => label.name);
  const artistNames = artists.map(artist => artist.name);
  const recordNames = records.map(record => record.title);
  console.log(records);
  console.log(recordNames);


  const title = useSelector(state => state.record.title);
  const artist = useSelector(state => state.record.artist);
  const label = useSelector(state => state.record.label);
  const year = useSelector(state => state.record.year);
  const size = useSelector(state => state.record.size);

  const version = useSelector(state => state.add)

  




  const handleChange = (e) => {
    
    switch(e.target.name){
      case "addTitle":
      dispatch(changeTitle(e.target.value))
      break;
      case "addArtist":
      dispatch(changeArtist(e.target.value))
      break;
      case "addYear":
      dispatch(changeYear(e.target.value))
      break;
      case "addLabel":
      dispatch(changeLabel(e.target.value))
      break;
      case "addSize":
      dispatch(changeSize(e.target.value))
      break;
    }
  }

  

  const addItem = e => {

    if(index){
      console.log("delete")
      dispatch(removeRecord(index));
    }
    e.preventDefault();

    onAdd(artist,title, year, label, size);
    setHidden( {display: "none" });
  }



  return(
    <div>
      <form className="Editor"
            style={style}
            >
        <h2> {version + ' record'}</h2>
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
            array={recordNames} 
            setTerm={changeTitle}/>
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
             array={artistNames} 
             setTerm={changeArtist}/>
          </div>
        <div className="inputWrapper">
          <input 
            type="number"
            name="addYear"
            value={year}
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
            array={labelNames} 
            setTerm={changeLabel}/>
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
  type="submit" >{version}</button>
  <button onClick={() => setHidden( {display: "none" })}>✖︎</button>
        </div>
      </form>
    </div>
  )
}

export default Editor;