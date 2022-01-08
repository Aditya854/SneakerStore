import React from 'react';
import logo from '../Resources/logo.png';

export default function Navbar() {
  return (
    <nav className='nav'>
        <img className='logo' src={logo} alt='store logo' />

      <div className='links'>
        <ul className='links-list'>
          <li id='nav-links' className='mx-3 text-white'>Men</li>
          <li id='nav-links' className='mx-3 text-white'>Women</li>
          <li id='nav-links' className='mx-3 text-white'>Kids</li>
          <li id='nav-links' className='mx-3 text-white'>New Arrivals</li>
          <li id='nav-links' className='mx-3 text-white'>Sale</li>
        </ul>
      </div>

      <div className='cart'>
        <button className='btn btn-outline-primary mx-2'>
          cart
        </button>
        <button className='profile btn btn-outline-primary mx-2'>profile</button>
        <button className='btn btn-outline-primary mx-2'>sign-in</button>
      </div>
    </nav>
  );
}
