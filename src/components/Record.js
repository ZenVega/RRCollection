import React from 'react';
import { useDispatch } from 'react-redux';
import { addFromSearchMode, removeRecord, editRecordMode, showEditor } from '../actions';

function Record ({id, searchResult, title, label, year, artist, size, img}) {

  let dispatch =  useDispatch();
  
  let addButton = id? '✎' : 'add';

  let style;
  let istyle;
  if(!img || img === './norecord.png'){
   img = './norecord.png';
    style = { 
      zIndex: 2,
      opacity: 1}
      istyle={opacity: 0.2}
  }

  const openEditor = () => {
    if(id){
      dispatch(editRecordMode(id));
    } else if (searchResult){
      dispatch(addFromSearchMode(searchResult))
    }
    dispatch(showEditor());
  }

  return(
    <div className="Record" >
      <img className="backImage" src={img} alt="album_cover" style={istyle} />
      <div className="infoWrapper" style={style}>
        <h2>{title}</h2>
        <h2>{artist}</h2>
        <p>{year}</p>
        <p>{label}</p>
        <p>{size}</p>
        <button 
          style={searchResult? {display: 'none'} : undefined}
          onClick={() => dispatch(removeRecord(id))}>✖︎</button>
        <button onClick={() => openEditor()}>{addButton}</button>
      </div>
    </div>
  )
}

export default Record;
