import React from 'react';
import Header from './header';
import Footer from '../../footer.js';

function Login() {
  return (
    <div className='login'>
      <Header />
      <div className='login-form-wrapper login-box'>
        <div className='title'>
          <h1>Login</h1>
        </div>

        <form className='login-form' action="/login" method="POST">
        <div className='login-email'>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
        </div>

        <div className='login-password'>
          <label htmlFor="passWord">Password</label>
          <input type="passWord" id="passWord" name="passWord" required />
        </div>

        <div className='login-button'>
          <button type="submit">Login</button>
        </div>
        </form>

        <div className='register-pg-switch'>
          <h2>Don't have an account? Sign up here!</h2>
          <button><a href="/register">Register</a></button>
        </div>
      </div>
      <Footer />
  </div>
      );
   }

export default Login;