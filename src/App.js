// src/App.js
import React from 'react';
import "./styles/index.css";
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';
import Buttons from './components/Buttons';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div>
     
      <NavBar/>
      <h1 id="homePageTitle"> Welcome to My Portfolio</h1>

      <Gallery/>
      <Buttons/>
      <Register/>
      <Login/>

      
      
    </div>
  );
}

export default App;
