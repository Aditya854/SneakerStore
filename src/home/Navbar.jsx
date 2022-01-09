import React from 'react';
import logoLight from '../Resources/LOGO LIGHT.png';
import logoDark from '../Resources/LOGO BLACK.png';
import { useGlobalContext } from '../context'; 

export default function Navbar() {
  const {form,setForm} = useGlobalContext();
  return (
    <nav className='nav fixed-top'>

      <div className="">
        <img className='logo' src={logoLight} alt='store logo' />
      </div>

      <div className='links'>
        <ul className='links-list'>
          <a id='nav-links' href="#">
            <li className='mx-3'>Men</li>
          </a>
          <a id='nav-links' href="#">
            <li className='mx-3'>Women</li>
          </a>
          <a id='nav-links' href="#">
            <li className='mx-3'>Kids</li>
          </a>
          <a id='nav-links' href="#">
            <li  className='mx-3'>New Arrivals</li>
          </a>
          <a id='nav-links' href="#">
            <li className='mx-3'>Sale</li>
          </a>
        </ul>
      </div>

      <div className='cart'>

          <a href="#"><i class="fas fa-shopping-cart"></i></a>
          <hr/>
          <a href="#" onClick={()=> setForm(true)}><i class="fas fa-user-circle"></i></a>
      </div>
    </nav>
  );
}
