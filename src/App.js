import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './home/Navbar';
import Footer from './home/Footer';
import SignIn from './home/SignIn';
import Caraosuel from './home/Caraousel';

function App() {
  return (
    <div>
      <Navbar/>
      <SignIn/>
      <Caraosuel/>
      <Footer/>
    </div>
  );
}

export default App;
