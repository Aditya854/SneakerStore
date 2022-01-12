import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './home/Navbar';
import Footer from './home/Footer';
import SignIn from './home/SignIn';
import Homepage from './pages/Homepage';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import NewArrivals from './pages/NewArrivals';
import Cart from './pages/Cart';
import {Itemprovider} from './context/GetItem';



function App() {
  return (
    <Itemprovider>
    <Router>
    <div>
      <Navbar/>
        <Routes>

          <Route path="/" element={<Homepage/>} />
          <Route path="/Men" element={<Men/>} />
          <Route path="/Women" element={<Women/>} />
          <Route path="/Kids" element={<Kids/>} />
          <Route path="/NewArrivals" element={<NewArrivals/>} />
          <Route path="/Cart" element={<Cart/>} />
           <Route path="/SignIn" element={<SignIn/>} /> 
            
        </Routes>
      <Footer/>
    </div>
</Router>
</Itemprovider>
  );
}

export default App;
