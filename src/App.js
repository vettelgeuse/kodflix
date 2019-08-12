import React from 'react';
import movie1 from './enlightenment_guaranteed.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
     <img src={movie1} alt='Enlightenment Guaranteed' />
     <br /><br /><br /> 
     <div className="container">
        <div className='movie_pic'>ReactJs</div>
        <div className='movie_pic'>HTML5</div>
        <div className='movie_pic'>CSS3</div>
     </div>
     <div className="container">
        <div className='movie_pic'>Node.js</div>
        <div className='movie_pic'>MongoDB</div>
        <div className='movie_pic'>Heroku</div>
     </div> 
    </div>
  );
}

export default App;
