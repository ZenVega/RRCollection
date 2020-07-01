import React from 'react';
import { useDispatch } from 'react-redux';
import {removeRecord, editRecord, updateIndex} from '../actions';



function Record ({title, artist, year, label, size, index, img, showEditor}) {

  let dispatch =  useDispatch();
  let style = {};
  let istyle ={};
  
  if(img === "https://img.discogs.com/4e860780db672a6b0038e39cd4613557f36e7df8/images/spacer.gif"){
    img = './norecord.png';
    style = { zIndex: 2,
              opacity: 1}
  } else if(!img){
    img = "";
    istyle = {display:"none"}
    style = { top:0,
    opacity: 1}
  }

  const openEditor = () => {
    dispatch(editRecord());
    dispatch(updateIndex(index))
    showEditor(index);
  }

  return(
    <div className="Record" >
      <img className="backImage" src={img} alt="album_cover" style={istyle} />
      <div className="infoWrapper" style={style}>
      <h2>{title}</h2>
      <h2>{artist}</h2>
      <p>{year}</p>
      <p>{label}</p>
      <p>{size}"</p>
      <button onClick={() => dispatch(removeRecord(index))}>✖︎</button>
      <button onClick={() => openEditor()}>✎</button>
    </div>
      
    </div>
  )
}

export default Record;