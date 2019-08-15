import React from 'react';
export default function Movies(props){
    return(
      <div className='movie_pic'>
      <img src={props.cover} alt={props.name} />
      <div className='overlay'>
        <h1>{props.name}</h1>
      </div>
    </div>    
    )
  }