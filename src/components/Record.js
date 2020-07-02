import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeRecord, editRecord, updateIndex, showEditor, changeArtist, changeLabel, changeSize, changeTitle, changeYear, changeImage} from '../actions';



function Record ({title, artist, year, label, size, index, img}) {

  let dispatch =  useDispatch();
  let style = {};
  let istyle ={};

  const records = useSelector(state => state.collection.records);
  const labels = useSelector(state => state.collection.labels);
  const artists = useSelector(state => state.collection.artists);
  
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

    dispatch(changeTitle(records[index].title));
    dispatch(changeYear(records[index].year));
    dispatch(changeSize(records[index].size));
    dispatch(changeArtist(artists.filter(artist => artist.artistID === records[index].artistID)[0].name));
    dispatch(changeLabel(labels.filter(label => label.labelID === records[index].labelID)[0].name));
    dispatch(changeImage(records[index].cover_image));

    dispatch(editRecord());
    dispatch(updateIndex(index))
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
      <button onClick={() => dispatch(removeRecord(index))}>✖︎</button>
      <button onClick={() => openEditor()}>✎</button>
    </div>
      
    </div>
  )
}

export default Record;