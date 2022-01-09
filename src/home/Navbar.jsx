import React from 'react';
import logoLight from '../Resources/LOGO LIGHT.png';
import logoDark from '../Resources/LOGO BLACK.png';

export default function Navbar() {
  return (
    <nav className='nav'>

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
          <a href="#"><i class="fas fa-user-circle"></i></a>

      </div>
    </nav>
  );
}
