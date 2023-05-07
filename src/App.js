import React, {useState, useSyncExternalStore} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Logo from "./Files/unseen-studio-s9CC2SKySJM-unsplash.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='NavContainer'>
         <h1 className="Title"><span className="accent">T</span>ime<span className="accent">S</span>haper</h1>
         <span className="NavBar"> 
              <div className="NonBox">About Us</div>
              <div className="NonBox">FAQs</div>
              <div className='Box'>
                <div className='ColouredBox'>Create</div>
              </div>
              <div className='Box'>
              <div className='ColouredBox'>Login</div>
              </div>
          </span>
        </div>
      </header>

      <div className="body"> 
      <h1 className="HomePageTitle">Design, customise and share your own <span className="accent">timelines</span></h1>
      <img src={Logo} id="HeroImage"></img>
      <div className="BigLogin">Create</div>
      </div>
    
    </div>
  );
}

export default App;
