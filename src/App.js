import React,  {useRef, useEffect, useState}from "react";
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Logo from "./Files/unseen-studio-s9CC2SKySJM-unsplash.jpg"
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import TimeLineApp from "./components/TimeLineApp/TimeLineApp";
import './App.css';
import CreatePage1 from "./components/CreatePage1/CreatePage1";
import CreatePage2 from "./components/CreatePage2/CreatePage2";

const App = () => {


  const [Title, setTitle] = useState('Test Title');
  const [Theme, setTheme] = useState();
  const [StartDate, setStartDate] = useState('1980/01/01');
  const [EndDate, setEndDate] = useState('2000/01/01');
  const [Intervals, setIntervals] = useState(10);
  const [TimeType, setTimeType] = useState('Yearly');

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
        <Route path = '/app'element = {<TimeLineApp Title = {Title} StartDate = {StartDate} EndDate = {EndDate} Intervals = {Intervals} TimeType = {TimeType} />} />
        <Route path = '/create1' element = {<CreatePage1 SetTitle = {setTitle} SetTheme = {setTheme}/>} />
        <Route path = '/create2' element = {<CreatePage2 SetStartDate = {setStartDate} SetEndDate={setEndDate} SetIntervals={setIntervals} SetTimeType={setTimeType}/>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
