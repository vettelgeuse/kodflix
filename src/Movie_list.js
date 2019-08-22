import React from 'react';
import Movies from './Movie_covers';
import movie1 from './images/enlightenment_guaranteed.jpg';
import movie2 from './images/circulo_polar.jpg';
import movie3 from './images/dolce_vita.jpg';
import movie4 from './images/gitanos.jpg';
import movie5 from './images/rashomon.jpg';
import movie6 from './images/sita_blues.jpg';
export default function Movielist() {
  return (
    <div>
      <div className="container">
        <Movies name='Enlightenment Guaranteed' cover={movie1} lnk='/enlightenment'/>
        <Movies name='Los amantes del Circulo Polar' cover={movie2} lnk='/circulopolar'/>
        <Movies name='La Dolce Vita' cover={movie3} lnk='/dolcevita'/>
        <Movies name='Tiempo de Gitanos' cover={movie4} lnk='/tiempogitanos'/>
        <Movies name='Rashomon' cover={movie5} lnk='/rashomon'/>
        <Movies name='Sita sings the Blues' cover={movie6} lnk='/sitablues'/>
      </div>
    </div>
  )
}