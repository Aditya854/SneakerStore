import React, {useState, useEffect} from 'react';
import logoLight from '../Resources/LOGO LIGHT.png';
import logoDark from '../Resources/LOGO BLACK.png';
import { useGlobalContext } from '../context'; 
import { Link } from 'react-router-dom';
// import logo from '../Resources/SneakPeek/shoelogo.png';
// import logo2 from '../Resources/SneakPeek/shoelogo2.png';


export default function Navbar() {
  const {form,setForm} = useGlobalContext();

  const [navbar,setNavbar] = useState(false);
  const [mx3,setText] = useState(false);

  const changeBackground = () => {
    if(window.scrollY > 80){
      setNavbar(true);
      setText(true);
    }
    else {
      setNavbar(false);
      setText(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
      <nav className= {navbar ? 'navbar active fixed-top' : 'navbar fixed-top'} >
    <div className="">
      <Link to="/">
      <img className='logo' src={navbar ? logoDark : logoLight} alt='store logo' />
      </Link>
    </div>

    <div className='links'>
      <ul className='links-list'>

        <Link to="/Men" id='nav-links' >
          <li className={mx3 ? 'mx3 act' : 'mx3'}>Men</li>
        </Link>

        <Link to="/Women" id='nav-links' >
          <li className={mx3 ? 'mx3 act' : 'mx3'}>Women</li>
        </Link>

        <Link to="/Kids" id='nav-links' >
          <li className={mx3 ? 'mx3 act' : 'mx3'}>Kids</li>
        </Link>

        <Link to="/NewArrivals" id='nav-links' >
          <li  className={mx3 ? 'mx3 act' : 'mx3'}>New Arrivals</li>
        </Link>

        <Link to="/Sale" id='nav-links' >
          <li className={mx3 ? 'mx3 act' : 'mx3'}>Sale</li>
        </Link>
      </ul>
    </div>

    <div className={navbar ? 'cart act' : 'cart'}>

        <Link to="/Cart">
        <i class="fas fa-shopping-cart"></i>
        </Link>

        <hr/>

        <Link to="/SignIn"><i class="fas fa-user-circle"></i>
        </Link>

    </div>
  </nav>
  );
}
