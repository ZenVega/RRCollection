import React from 'react';

function Record ({title, artist, year, label, size, index, onRemove}) {

  const Remove = () => {
    onRemove(index);
  }

  return(
    <div className="Record">
      <h2>{title}</h2>
      <h2>{artist}</h2>
      <p>{year}</p>
      <p>{label}</p>
      <p>{size}"</p>
      <button onClick={() => Remove(index)}>x</button>
    </div>
  )
}

export default Record;