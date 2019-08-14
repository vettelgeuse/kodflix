import React from 'react';
import movie1 from './enlightenment_guaranteed.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
     <img src={movie1} alt='Enlightenment Guaranteed' />
     <br /><br /><br /> 
     <div className="container">
        <div className='movie_pic'> <h1>ReactJs</h1> </div>
        <div className='movie_pic'> <h1>HTML5</h1> </div>
        <div className='movie_pic'> <h1>CSS3</h1> </div>
     </div>
     <div className="container">
        <div className='movie_pic'><h1>Node.js</h1></div>
        <div className='movie_pic'><h1>MongoDB</h1></div>
        <div className='movie_pic'><h1>Heroku</h1></div>
     </div> 
    </div>
  );
}

export default App;
