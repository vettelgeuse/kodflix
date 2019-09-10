import React from 'react';
import MovieCover from './Movie_cover';
import getMovieList from './getMovieList';

export default function Movielist() {
  return (
    <div>
      <div className="container">
        {
          getMovieList().map((movie) => (

            <MovieCover
              key={movie.name}
              name={movie.name}
              cover={movie.cover}
              lnk={movie.lnk}
            />

          ))
        }

      </div>
    </div>
  )
}
