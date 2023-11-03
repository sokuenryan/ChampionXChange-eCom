import React, { useState } from 'react';
import Header from '../header/header.js';
import Footer from '../../footer.js';

export default function Signup() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
    });
  
    const { name, email, phone } = formData;
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log(formData);
      // Reset form fields
      setFormData({ name: '', email: '', phone: '' });
    };
  
     return (
      <div className='signup-wrapper'>
        <Header />

        <div className='signup-body'>
          <div className='sign-up form'>
              <form onSubmit={handleSubmit}>
                <div className='name'>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </div>

                <div className='email'>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                </div>
                <div className='phone'>
                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                    />
                </div>
                <button type="submit">Sign Up</button>
              </form>
          </div>
        </div>

        <Footer />
      </div>
      );
   }