import React from "react";
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Logo from "./Files/unseen-studio-s9CC2SKySJM-unsplash.jpg"
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import './App.css';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element = {
         <div className="App">
          <div className="body"> 
            <h1 className="HomePageTitle">Design, customise and share your own <span className="accent">timelines</span></h1>
            <img src={Logo} id="HeroImage"></img>
          <Link className="BigLogin" to='/login'>Create</Link>
          </div>
         </div>
        }>
        </Route>
        <Route path ='/login' element = {<Login/>} />
        <Route path ='/register' element = {<Register/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
