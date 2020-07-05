import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeRecord, updateImageArray, addRecord, editRecord, updateIndex, showEditor, changeArtist, changeLabel, changeSize, changeTitle, changeYear, changeImage} from '../actions';



function Record ({title, artist, year, label, size, index, img, hiddenWhenSearchresult}) {

  let dispatch =  useDispatch();
  let style = {};
  let istyle ={};

  let addButton = '✎';
    if(hiddenWhenSearchresult){
      addButton = 'add';
    }

  const records = useSelector(state => state.collection.records);
  const labels = useSelector(state => state.collection.labels);
  const artists = useSelector(state => state.collection.artists);
  
  if(img.indexOf('spacer.gif') !== -1){
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

    if(hiddenWhenSearchresult){
      openAdder();
    } else {

      dispatch(changeTitle(records[index].title));
      dispatch(changeYear(records[index].year));
      dispatch(changeSize(records[index].size));
      dispatch(changeArtist(artists.filter(artist => artist.artistID === records[index].artistID)[0].name));
      dispatch(changeLabel(labels.filter(label => label.labelID === records[index].labelID)[0].name));
      dispatch(changeImage(records[index].cover_image));
  
      dispatch(editRecord());
      dispatch(updateIndex(index))
      dispatch(updateImageArray([records[index].cover_image]))
      dispatch(showEditor());
    }

  }

  const openAdder = () => {
    dispatch(changeTitle(title));
    dispatch(changeYear(year));
    dispatch(changeSize(size));
    dispatch(changeArtist(artist));
    dispatch(changeLabel(label));
    dispatch(changeImage(img));

    dispatch(addRecord());
    dispatch(updateImageArray([img]))
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
        <p>{size}"</p>
        <button 
          style={hiddenWhenSearchresult}
          onClick={() => dispatch(removeRecord(index))}>✖︎</button>
        <button onClick={() => openEditor()}>{addButton}</button>
      </div>
    </div>
  )
}

export default Record;