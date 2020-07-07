import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeRecord, editRecord, showEditor } from '../actions';

//DELETE RECORD IS NOT WORKING
// HOW TO PRESENT ALL KEY/VALUE PAIRS FROM AN OBJECT INSTEAD OF ARRAY

function Record ({id, hiddenWhenSearchresult}) {

  let dispatch =  useDispatch();
  
  let addButton = '✎';
  if(hiddenWhenSearchresult){
    addButton = 'add';
  }
  
  const {records, labels, artists} = useSelector(state => state.collection);
  const record = records[id]; //BECOMES UNDEFINED WHEN RECORD IS DELETED

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

  const openEditor = () => {

    dispatch(editRecord(id));
    dispatch(showEditor());
  }


  return(
    <div className="Record" >
      <img className="backImage" src={img} alt="album_cover" style={istyle} />
      <div className="infoWrapper" style={style}>
        <h2>{record.title}</h2>
        <h2>{artists[record.artistID].name}</h2>
        <p>{record.year}</p>
        <p>{labels[record.labelID].name}</p>
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