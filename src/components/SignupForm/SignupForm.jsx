import React from 'react';
import './SignupForm.css';
import { FaUser,FaLock,FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom'; 
const SignupForm = () => {
  return (
    <div className='signup-form'>
    <div className='wrappersignup'>
  <h1>SignUpForm</h1>
  <form>
    <div className="input-box">
      <input type='text' placeholder='Full Name' required />
      <FaUser className='icon'/>
    </div>
    <div className="input-box">
      <input type='email' placeholder='Email' required />
      <FaEnvelope className='icon'/>
    </div>
    <div className="input-box">
      <input type='password' placeholder='Password' required />
      <FaLock className='icon'/>
    </div>
    <div className="input-box">
      <input type='password' placeholder='Confirm Password' required />
      <FaLock className='icon'/>
    </div>
    <button type='submit'>Sign Up</button>
    <div className="register-link">
        <p>Already have an account?  <Link to='/LoginForm'>Login</Link></p> 
    </div>
  </form>
</div>
</div>
  )
}

export default SignupForm






