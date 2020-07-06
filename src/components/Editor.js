/* eslint-disable default-case */
import React from 'react';
import InputPlusAutofill from './Autofill';
import PicSelector from './PicSelector';
import { useSelector, useDispatch } from 'react-redux';
import { removeRecord, changeArtist, changeLabel, changeSize, changeTitle, changeYear, addNewRecord, addNewLabel, addNewArtist , hideEditor } from '../actions';
const { v4: generateID } = require('uuid');



function Editor(){

  const dispatch = useDispatch();

  const records = useSelector(state => state.collection.records);
  const artists = useSelector(state => state.collection.artists);
  const labels = useSelector(state => state.collection.labels);
  
  const {title, year ,label, artist, size, cover_image} = useSelector(state => state.editor.recordInProgress);

  const index = useSelector(state => state.editor.currentIndex);
  const setup = useSelector(state => state.editor.setup);
  
  const labelNames = labels.map(label => label.name);
  const artistNames = artists.map(artist => artist.name);
  const recordNames = records.map(record => record.title);



  const addItem = e => {

    if(!title || !artist){
      alert('Title or Artist Missing');
      return;
    }


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
      artistID = generateID();
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
      labelID = generateID();
      const labelToAdd = {
        name: label,
        labelID: labelID
      };
      dispatch(addNewLabel(labelToAdd))
    }
    const id = generateID();

    const recordToAdd = {
      id,
      artistID,
      title,
      year,
      size,
      labelID,
      cover_image
    };
    dispatch(addNewRecord(recordToAdd));
    dispatch(hideEditor());
  }

  return (
    <div className="Editor">
      <div className="inputBox">
      <h2 className="EditorHeader" > {setup + ' record'}</h2>
        <InputPlusAutofill
          className="inputWrapper"
          term={title}
          list={recordNames} 
          fromTop={70}
          placeholder="Title"
          handleChange={newValue => dispatch(changeTitle(newValue))}
          />
        <InputPlusAutofill
          className="inputWrapper"
          term={artist}
          list={artistNames} 
          fromTop={100}
          placeholder="Artist"
          handleChange={newValue => dispatch(changeArtist(newValue))}
          />
        <input
          className="inputWrapper" 
          type="number"
          name="addYear"
          value={year}
          style={{top: '160px'}}
          onChange={e => dispatch(changeYear(e.target.value))}
          placeholder="Year"/> 
        <InputPlusAutofill
          className="inputWrapper"
          term={label? label: ''}
          fromTop={130}
          list={labelNames} 
          placeholder="Label"
          handleChange={newValue => dispatch(changeLabel(newValue))}
          />
        <div 
          className="inputWrapper"
          style={{top: '190px'}}>
          <select 
            name="addSize" 
            value={size}
            
            onChange={e => dispatch(changeSize(e.target.value))}>
            <option value="LP">LP</option>
            <option value="EP">EP</option>
            <option value="Single">Single</option>
          </select>
        </div>
      </div>
      <PicSelector />
      <div className="footer">
        <button 
        onClick={e => addItem(e)}
        type="submit" >{setup}</button>
        <button onClick={() => dispatch(hideEditor())}>✖︎</button>
      </div>
    </div>
  )
}

export default Editor;