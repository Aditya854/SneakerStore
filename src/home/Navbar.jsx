import React from 'react';
import logoLight from '../Resources/LOGO LIGHT.png';
import logoDark from '../Resources/LOGO BLACK.png';
import { useGlobalContext } from '../context'; 
import { Link } from 'react-router-dom';


export default function Navbar() {
  const {form,setForm} = useGlobalContext();
  return (
    <nav className='nav fixed-top'>

    <div className="">
      <Link to="/">
      <img className='logo' src={logoLight} alt='store logo' />
      </Link>
    </div>

    <div className='links'>
      <ul className='links-list'>

        <Link to="/Men" id='nav-links' >
          <li className='mx-3'>Men</li>
        </Link>

        <Link to="/Women" id='nav-links' >
          <li className='mx-3'>Women</li>
        </Link>

        <Link to="/Kids" id='nav-links' >
          <li className='mx-3'>Kids</li>
        </Link>

        <Link to="/NewArrivals" id='nav-links' >
          <li  className='mx-3'>New Arrivals</li>
        </Link>

        <Link to="/Sale" id='nav-links' >
          <li className='mx-3'>Sale</li>
        </Link>
      </ul>
    </div>

    <div className='cart'>

        <Link to="/Cart">
        <i class="fas fa-shopping-cart"></i>
        </Link>

        <hr/>

        <Link to="/SignIn"onClick={()=> setForm(true)}><i class="fas fa-user-circle"></i>
        </Link>

    </div>
  </nav>
  );
}
