import React, {useState} from 'react';
import Discogs from './util/Discogs';
import {useSelector, useDispatch} from 'react-redux';
import { updatePicSelectorStyle, updateImageArray, changeImage } from '../actions';

// SATZZEICHEN IN DER BILDERSUCHE SIND PROBLEMATISCH

function PicSelector () {
  const dispatch = useDispatch()
  
  const title = useSelector(state => state.record.title);
  const artist = useSelector(state => state.record.artist);
  const style = useSelector(state => state.picSelectorStyle)
  const imageArray = useSelector(state => state.imageArray);

  const [counter, setCounter] = useState(0);
  const [URLToUpload, setURLToUpload]= useState('');


  const imageSwapPrevious = e => {
    e.preventDefault();
    
    if(counter === 0){
      setCounter(imageArray.length -1)
    }else {
    setCounter(counter - 1);
    }
    dispatch(changeImage(imageArray[counter-1]))
  }

  const imageSwapNext = e => {
    e.preventDefault();
    
    if(counter === imageArray.length -1){
      setCounter(0);
    } else {
      setCounter(counter +1);
    }
    dispatch(changeImage(imageArray[counter+1]))
  }
  

  const findImage = e => {
    e.preventDefault();
    setCounter(0);

//GENERATE SEARCHTERM
    let titleQuery = title.replace(/ /g, '+');
    let artistQuery = artist.replace(/ /g, '+');
    let term = `${titleQuery}+${artistQuery}`;

//GENERATE IMAGE_ARRAY
    Discogs.search(term)
    .then(res =>  res.results.map(result => result.cover_image))
    .then(res => res.filter(url => url.indexOf('spacer.gif') === -1))
    .then(res => dispatch(updateImageArray(res)))
    .then(res => dispatch(changeImage(res.payload[0])))

  // CSS UPDATE
    dispatch(updatePicSelectorStyle('findBtn', {display: 'none'}))
    dispatch(updatePicSelectorStyle('urlInput', {top: '90%'}))
    dispatch(updatePicSelectorStyle('preNxt', {display: 'block'}))
    dispatch(updatePicSelectorStyle('previewImage', {opacity: 1}))

  }

    const uploadImage = e => {
      e.preventDefault();
      dispatch(changeImage(URLToUpload))
      setCounter(0);
      dispatch(updateImageArray([URLToUpload]))
      dispatch(updatePicSelectorStyle('previewImage', {opacity: 1}))
      dispatch(updatePicSelectorStyle('urlInput', {display:'none'}))
      dispatch(updatePicSelectorStyle('findBtn', {top: '10px'}))
      dispatch(updatePicSelectorStyle('preNxt', {display: 'none'}))
    }


  return (
    <div className="imgBox oneLine">
      <button 
        style={style.findBtn}
        onClick={e => findImage(e)}
        id="findBtn">Find Cover</button>
      <button 
        style={style.preNxt}
        className="imageSwitches" 
        id="prevBtn"
        onClick={(e) => imageSwapPrevious(e)}>prev</button>
      <button 
        style={style.preNxt}
        className="imageSwitches" 
        id="nextBtn"
        onClick={(e) => imageSwapNext(e,'plus')}>next</button>
      <img 
        className="previewImage" 
        src={imageArray[counter]} 
        alt="album_cover" 
        style={style.previewImage}/>
      <div 
        style={style.urlInput}
        className="urlInputWrapper">
        <input 
          style={style.urlInput}
          id="imageGetter" 
          type="text"
          placeholder="or insert imageUrl"
          onChange={e => setURLToUpload(e.target.value)} />
        <button 
          style={style.urlInput}
          id="imageGetterBtn"
          onClick={e => uploadImage(e)}> upload</button>  
      </div>
    </div>
  )
}

export default PicSelector;