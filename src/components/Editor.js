/* eslint-disable default-case */
import React ,{useEffect} from 'react';
import InputPlusAutofill from './Autofill';
import PicSelector from './PicSelector';
import { useSelector, useDispatch } from 'react-redux';
import { updateRecordInProgress, changeArtist, changeLabel, changeSize, changeTitle, changeYear, addNewRecord, editRecord, addNewLabel, addNewArtist , hideEditor } from '../actions';
const { v4: generateID } = require('uuid');


function Editor(){
  const dispatch = useDispatch();
  
  let {mode, id, searchResult} = useSelector(state => state.editor.setup);
  const {records, artists, labels} = useSelector(state => state.collection);
  const { title, year ,label, artist, size, cover_image} = useSelector(state => state.editor.recordInProgress);
  
  useEffect(() => {
    if(mode === 'edit'){
      dispatch(updateRecordInProgress({
        title: records[id].title,
        year: records[id].year,
        label: labels[records[id].labelID].name,
        artist: artists[records[id].artistID].name,
        size: records[id].size,
        cover_image: records[id].cover_image
      }))
    } else if (mode === 'add'){
      dispatch(updateRecordInProgress({
        title: '',
        year: '',
        label: '',
        artist: '',
        size: 'LP',
        cover_image: './norecord.png'
      }))
    } else if (mode === 'addFromSearch'){
        dispatch(updateRecordInProgress({
          title: searchResult.title,
          year: searchResult.year,
          label: searchResult.label,
          artist: searchResult.artist,
          size: searchResult.size,
          cover_image: searchResult.cover_image
        }))

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);



  const labelNames = labels.labelIDs.map(id => labels[id].name);
  const artistNames = artists.artistIDs.map(id => artists[id].name);
  const recordNames = records.recordIDs.map(id => records[id].title);


  const addItem = () => {

    if(!title || !artist || !label){
      alert('Title, Artist or Label Missing');
      return;
    }

    let artistID;
    let labelID;

    if(id){
     artistID = records[id].artistID;
     labelID = records[id].labelID;

    } else {
      id = 'record.' + generateID();
      artistID = 'artist.' + generateID();
      labelID = 'label.' + generateID();

      const artistToAdd = {
        name: artist,
        artistID: artistID
      };
      dispatch(addNewArtist(artistID, artistToAdd))
      
      const labelToAdd = {
        name: label,
        labelID: labelID
      };
      dispatch(addNewLabel(labelID, labelToAdd))
    }

    const recordToAdd = {
      artistID,
      title,
      year,
      size,
      labelID,
      cover_image
    };

    if(mode === 'edit'){
      dispatch(editRecord(id, recordToAdd));
    } else if (mode === 'add' || 'addFromSearch'){
      dispatch(addNewRecord(id, recordToAdd));
    }
    dispatch(hideEditor());
  }

  return (
    <div className="Editor">
      <div className="inputBox">
        <h2 className="EditorHeader" > {mode + ' record'}</h2>
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
          <InputPlusAutofill
            className="inputWrapper"
            term={label? label: ''}
            fromTop={130}
            list={labelNames} 
            placeholder="Label"
            handleChange={newValue => dispatch(changeLabel(newValue))}
            />
          <input
            className="inputWrapper" 
            type="number"
            name="addYear"
            value={year}
            style={{top: '160px'}}
            onChange={e => dispatch(changeYear(e.target.value))}
            placeholder="Year"/> 
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
        onClick={() => addItem()}
        type="submit" >{mode}</button>
        <button onClick={() => dispatch(hideEditor())}>✖︎</button>
      </div>
    </div>
  )
}

export default Editor;