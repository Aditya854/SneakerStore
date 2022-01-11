import react from 'react';
import { useState, useEffect } from 'react';
import reactDom from 'react-dom';
import logo_dark from '../Resources/LOGO BLACK.png';
import { useGlobalContext } from '../context'; 


export default function SignIn() {
  const {form,setForm} = useGlobalContext();
  // useEffect(() => {
  //   const body = document.querySelector('body');
  //   body.style.overflow = form ? 'hidden' : 'auto';
  // }, [form])
  return (
      <div className={form ? `modal-overlay`:``}>
        <div className={form ? `main-form-div`:`close main-form-div`}>
          <div className='logo-div'>
            <img className='form-logo mt-4' src={logo_dark} alt='' />
          </div>
          {/* <div className='tagline mt-4 text-center'>
            <h3>Home to every sneaker freak</h3>
          </div> */}
          <div className='form-div mt-4'>
            <input
              className='form-control mb-3'
              type='text'
              placeholder='Email Address'
            />
            <input
              className='form-control'
              type='password'
              placeholder='Password'
            />
          </div>
          <div className='form-extra mt-4'>
            <div className='remember-box'>
              <input type='checkbox' class='form-check-input' />
              <label class='form-text'>Remember Me</label>
            </div>
            <div>
              <a href='' className='form-text text-primary'>
                Forgot Password?
              </a>
            </div>
          </div>
          <div className='privacy-policy form-text mt-3'>
            By logging in, you agree to SneakersStore's Privacy Policy and Terms of
            Use.
          </div>
          <button className='sign-in-btn btn btn-dark mt-3' type='submit'>
            Sign In
          </button>
          <div className='join-us form-text mt-3'>
            Not a Member?
            <a className='form-text text-primary'>  Join Us.</a>
          </div>
          <button className='close-btn btn' onClick={()=> setForm(false)}>+</button>
        </div>
      </div>
  );
}
