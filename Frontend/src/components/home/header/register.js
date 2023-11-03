import React from 'react';
import Header from './header.js'
import Footer from '../../footer.js';

function Register() {
  return (
    <div className='register'>
      <Header style='' />

      <div className='registration-form'>
        <div className='title'>
          <h1>Register</h1>
        </div>

        <form className='reg-form' action="/register" method="POST">
          {/* {{ form.hidden_tag() }} */}

          <div className='reg-name'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className='reg-email'>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required />
          </div>

          <div className='reg-email'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

          <div className='reg-button'>
            <button type="submit">Register</button>
          </div>

          <div className='login-return'>
            <h2>Already have an account?</h2>
            <button><a href="/login"> Return to Login</a></button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Register;
