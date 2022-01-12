import react from 'react';
import { useState, useEffect } from 'react';
import reactDom from 'react-dom';
import logo_dark from '../Resources/LOGO BLACK.png';
import { useGlobalContext } from '../context';

export default function SignIn() {
  return (
    <div className='main-account-div'>
      <div className='account-div'>
        <div className='main-form-div'>
          <h3 className='mb-4'>Login In</h3>
          <div className='form-div'>
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
            By logging in, you agree to SneakersStore's Privacy Policy and Terms
            of Use.
          </div>
          <button className='sign-in-btn btn btn-dark mt-3' type='submit'>
            Sign In
          </button>
        </div>

        <div className='vertical-line'/>
        {/* sign-up */}


        <div className='main-form-div'>
          <h3 className='mb-4'>Create Account</h3>
          <div className='form-div'>
            <input
              className='form-control mb-3'
              type='text'
              placeholder='First Name'
            />
            <input
              className='form-control mb-3'
              type='text'
              placeholder='Last Name'
            />
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
          <button className='sign-in-btn btn btn-dark mt-3' type='submit'>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
