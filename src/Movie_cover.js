import React from 'react';
import { Link } from 'react-router-dom';
export default function MovieCover(props) {
  return (
    <Link to={props.lnk} className='movie_pic'>
      <img src={props.cover} alt={props.name} />
      <div className='overlay'>
        <h1>{props.name}</h1>
      </div>
    </Link>
  );
}