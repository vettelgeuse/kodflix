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
          <div className='overlay'>
            <h1>Sabiduria Garantizada</h1>
          </div>
        </div>
        <div className='movie_pic'>
          <img src={movie2} alt='Los amantes del Circulo Polar' />
          <div className='overlay'>
            <h1>Los amantes del Circulo Polar</h1>
          </div>
        </div>
        <div className='movie_pic'>
          <img src={movie3} alt='La Dolce Vita' />
          <div className='overlay'>
            <h1>La Dolce Vita</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className='movie_pic'>
          <img src={movie4} alt='Tiempo de Gitanos' />
          <div className='overlay'>
            <h1>Tiempo de Gitanos</h1>
          </div>
        </div>
        <div className='movie_pic'>
          <img src={movie5} alt='Rashomon' />
          <div className='overlay'>
            <h1>Rashomon</h1>
          </div>
        </div>
        <div className='movie_pic'>
          <img src={movie6} alt='Sita sings the Blues' />
          <div className='overlay'>
            <h1>Sita sings the Blues</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
