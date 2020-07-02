import React, {useState} from 'react';
import Discogs from './util/Discogs';
import {useSelector, useDispatch} from 'react-redux';
import { changeImage, updateImageArray } from '../actions';

let counter = 0;


function PicSelector () {
  const dispatch = useDispatch()
  const title = useSelector(state => state.record.title);
  const artist = useSelector(state => state.record.artist);

  const imageArray = useSelector(state => state.variables.imageArray);
  const [counter, setCounter] = useState(0);

  const imageSwap = (e, plus) => {
    e.preventDefault();
    if(plus){
        if(counter === imageArray.length -1){
          setCounter(0);
        } else {
          setCounter(counter +1);
        }
      
    } else {
      if(counter === 0){
        setCounter(imageArray.length -1)
      }else {
      setCounter(counter - 1);
      }
    console.log(counter);
    console.log(imageArray)
    }
  }

  const findImage = e => {
    e.preventDefault();

    let titleQuery = title.replace(/ /g, '+');
    let artistQuery = artist.replace(/ /g, '+');
    let term = `${titleQuery}+${artistQuery}`;
    
    Discogs.search(term).then(res =>  res.results.map(result => result.cover_image)).then(res => res.filter(url => url !== "https://img.discogs.com/82ab9e449b349e00ce86eb994af66f5b3d1b5bc2/images/spacer.gif")).then(res => dispatch(updateImageArray(res)))
  }

  return(
    <div className="imgBox oneLine">
      <button 
        onClick={e => findImage(e)}
        id="findBtn">Find Cover</button>
      <button 
        className="imageSwitches" 
        id="prevBtn"
        onClick={(e) => imageSwap(e)}>prev</button>
      <button 
        className="imageSwitches" 
        id="nextBtn"
        onClick={(e) => imageSwap(e,'plus')}>next</button>
      <img 
        className="previewImage" 
        src={imageArray[counter]} 
        alt="album_cover" />
      <input 
        id="imageGetter" 
        type="text"
        placeholder="or insert imageUrl"/>
      <button id="imageGetterBtn"> upload</button>  
    </div>
  )
}

export default PicSelector;