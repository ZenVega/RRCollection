import React from 'react';

function Record ({title, artist, year, label, size, index, onRemove, img}) {
  let style = {};
  
  if(img === "https://img.discogs.com/4e860780db672a6b0038e39cd4613557f36e7df8/images/spacer.gif"){
    img = './norecord.png';
    style = { zIndex: 2,
              opacity: 1}
  }
  const Remove = () => {
    onRemove(index);
  }

  return(
    <div className="Record" >
      <img className="backImage" src={img} alt="album_cover"  />
      <div className="infoWrapper" style={style}>
      <h2>{title}</h2>
      <h2>{artist}</h2>
      <p>{year}</p>
      <p>{label}</p>
      <p>{size}"</p>
      <button onClick={() => Remove(index)}>x</button>
    </div>
      
    </div>
  )
}

export default Record;