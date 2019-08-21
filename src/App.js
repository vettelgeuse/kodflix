import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Movielist from './Movie_list';
import Details from './Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path='/' component={Movielist} />
        <Route exact path='/details' component={Details} />
      </HashRouter>

    </div>
  );
}

export default App;