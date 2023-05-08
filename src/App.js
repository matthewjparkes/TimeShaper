import React, {useState, useSyncExternalStore} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Logo from "./Files/unseen-studio-s9CC2SKySJM-unsplash.jpg"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="body"> 
      <h1 className="HomePageTitle">Design, customise and share your own <span className="accent">timelines</span></h1>
      <img src={Logo} id="HeroImage"></img>
      <div className="BigLogin">Create</div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
