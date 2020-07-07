import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeRecord, updateImageArray, addRecord, editRecord, addID, showEditor, changeArtist, changeLabel, changeSize, changeTitle, changeYear, changeImage} from '../actions';



function Record ({id, hiddenWhenSearchresult}) {

  let dispatch =  useDispatch();
  
  let addButton = '✎';
  if(hiddenWhenSearchresult){
    addButton = 'add';
  }
  
  const {records, labels, artists} = useSelector(state => state.collection);

  const record = records.filter(record => record.id === id)[0]

  let img;
  let style;
  let istyle;
  
  if(!record.cover_image || record.cover_image === './norecord.png'){
   img = './norecord.png';
    style = { zIndex: 2,
              opacity: 1}
              istyle={opacity: 0.2}
  } else {
    img = record.cover_image
  }

  const displayArtist = () => {
    let currentArtist = artists.find(artist => artist.artistID === record.artistID)
      return currentArtist.name;
  }

  const displayLabel = () => {
    let currentLabel = labels.find(label => label.labelID === record.labelID)
      return currentLabel.name;
  }

  const openEditor = () => {
    dispatch(editRecord(id));
    dispatch(showEditor());
  }

    /* if(hiddenWhenSearchresult){
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
      dispatch(updateImageArray([records[index].cover_image]))} */
    


  /* const openAdder = () => {
    dispatch(addRecord());
    dispatch(showEditor());

    dispatch(changeTitle(title));
    dispatch(changeYear(year));
    dispatch(changeSize(size));
    dispatch(changeArtist(artist));
    dispatch(changeLabel(label));
    dispatch(changeImage(img));

    dispatch(updateImageArray([img]))
  } */

  return(
    <div className="Record" >
      <img className="backImage" src={img} alt="album_cover" style={istyle} />
      <div className="infoWrapper" style={style}>
        <h2>{record.title}</h2>
        <h2>{displayArtist}</h2>
        <p>{record.year}</p>
        <p>{displayLabel}</p>
        <p>{record.size}</p>
        <button 
          style={hiddenWhenSearchresult}
          onClick={() => dispatch(removeRecord(id))}>✖︎</button>
        <button onClick={() => openEditor()}>{addButton}</button>
      </div>
    </div>
  )
}

export default Record;