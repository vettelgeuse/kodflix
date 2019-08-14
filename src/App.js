import React from 'react';
import movie1 from './images/enlightenment_guaranteed.jpg';
import movie2 from './images/circulo_polar.jpg';
import movie3 from './images/dolce_vita.jpg';
import movie4 from './images/gitanos.jpg';
import movie5 from './images/rashomon.jpg';
import movie6 from './images/sita_blues.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='movie_pic'>
          <img src={movie1} alt='Enlightenment Guaranteed' />
        </div>
        <div className='movie_pic'>
          <img src={movie2} alt='Los amantes del Circulo Polar' />
        </div>
        <div className='movie_pic'>
          <img src={movie3} alt='La Dolce Vita' />
        </div>
      </div>
      <div className="container">
        <div className='movie_pic'>
          <img src={movie4} alt='Tiempo de Gitanos' />
        </div>
        <div className='movie_pic'>
          <img src={movie5} alt='Rashomon' />
        </div>
        <div className='movie_pic'>
          <img src={movie6} alt='Sita sings the Blues' />
        </div>
      </div>
    </div>
  );
}

export default App;
