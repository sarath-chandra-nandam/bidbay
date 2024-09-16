import React from 'react';
import './ForgotPassword.css';
import { Link ,Outlet} from 'react-router-dom'; 
import './ResetPassword.css'; 


const ForgotPassword = () => {
  return (
    <div className='forgot-password'>
      <div className='wrapper'>
        <h1>Forgot Password</h1>
        <form>
          <div className="input-box">
            <input type='email' placeholder='Enter your email' required />
          </div>
          <button type='submit'><Link to='/forgot-password/reset-password'>Reset Password</Link></button>
          <div className="login-link">
            <p>Remember your password? <Link to='/LoginForm'>Login</Link></p>
          </div>
        </form>
      </div>
      <Outlet/>
    </div>
  );
}

export default ForgotPassword;



export function ResetPassword(){
// const ResetPassword = () => {
  return (
    <div className='reset-password1'>
      <div className='wrapper1'>
        <h1>Reset Password</h1>
        <form>
          <div className="input-box1">
            <input type='text' placeholder='Enter OTP Recieved To Your Mail' required />
          </div>
          <div className="input-box1">
            <input type='password' placeholder='New Password' required />
          </div>
          <div className="input-box1">
            <input type='password' placeholder='Confirm New Password' required />
          </div>
          <button type='submit'>Reset Password</button>
          <div className="login-link1">
            <p>Remember your password? <Link to='/LoginForm'>Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}


