/* eslint-disable default-case */
import React from 'react';
import Autofill from './Autofill';
import PicSelector from './PicSelector';
import { useSelector, useDispatch } from 'react-redux';
import { removeRecord, changeArtist, changeLabel, changeSize, changeTitle, changeYear, addNewRecord, addNewLabel, addNewArtist , hideEditor } from '../actions';


function Editor(){

  const dispatch = useDispatch();

  const records = useSelector(state => state.collection.records);
  const artists = useSelector(state => state.collection.artists);
  const labels = useSelector(state => state.collection.labels);
  
  const title = useSelector(state => state.record.title);
  const artist = useSelector(state => state.record.artist);
  const label = useSelector(state => state.record.label);
  const year = useSelector(state => state.record.year);
  const size = useSelector(state => state.record.size);
  const cover = useSelector(state => state.record.cover_image);
  
  const hidden = useSelector(state => state.editor);
  const index = useSelector(state => state.currentIndex);
  const version = useSelector(state => state.add);
  
  const labelNames = labels.map(label => label.name);
  const artistNames = artists.map(artist => artist.name);
  const recordNames = records.map(record => record.title);
  

  const handleChange = e => {

    e.preventDefault();
    
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

    e.preventDefault();

    if(!title || !artist){
      alert('Title or Artist Missing');
      return;
    }


    console.log(index);

    if(index !== undefined){
      console.log(index);
      dispatch(removeRecord(index));
    }

    let artistID;
    let artistObj = artists.find(inListArtist => inListArtist.name === artist);
    if(artistObj){
      artistID = artistObj.artistID;
    }

    if(!artistID){
      artistID = Math.floor(Math.random()*10*1000);
      const artistToAdd = {
        name: artist,
        artistID: artistID
      };
      dispatch(addNewArtist(artistToAdd))
    }


    let labelID;
    let labelObj = labels.find(inListLabel => inListLabel.name === label);
    if(labelObj){
      labelID = labelObj.labelID;
    }

    if(!labelID){
      labelID = Math.floor(Math.random()*10*1000);
      const labelToAdd = {
        name: label,
        labelID: labelID
      };
      dispatch(addNewLabel(labelToAdd))
    }


    const recordToAdd = {
      artistID,
      title,
      year,
      size,
      labelID,
      cover_image: cover
    };
    dispatch(addNewRecord(recordToAdd));
    dispatch(hideEditor());
  }

  return (
    <div>
      <form className="Editor">
        <div className="oneBlock">
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
              list={recordNames} 
              onClickSuggestion={suggestion => dispatch(changeTitle(suggestion)) }
            />
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
              list={artistNames} 
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
              list={labelNames} 
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
        </div>
        <PicSelector />
        <div className="inputWrapper oneLine">
          <button 
          onClick={e => addItem(e)}
          type="submit" >{version}</button>
          <button onClick={() => dispatch(hideEditor())}>✖︎</button>
        </div>
      </form>
    </div>
  )
}

export default Editor;