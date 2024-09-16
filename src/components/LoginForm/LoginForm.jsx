import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'; 
import SignupForm from '../SignupForm/SignupForm';

const LoginForm = () => {
  return (
    <div className='login-form'>
      <div className='wrapper'>
        <h1>LoginForm</h1>
        <form>
          <div className="input-box">
            <input type='text' placeholder='UserName' required />
            <FaUser className='icon' size={20}/>
          </div>
          <div className="input-box">
            <input type='password' placeholder='Password' required />
            <FaLock className='icon' size={20}/>
          </div>
          <div className="remember-forget">
            <label><input type='checkbox' />Remember Me</label>
            <Link to='/forgot-password'>Forgot password</Link> {/* Changed from anchor tag to Link */}
          </div>
          <button type='submit'><Link to='/'>Login</Link></button>
          <div className="register-link">
            <p>Don't have an account? <Link to='/SignupForm'>Register</Link></p> {/* Changed onClick to Link */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
