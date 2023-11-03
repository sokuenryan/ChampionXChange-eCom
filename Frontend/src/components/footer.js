import React, { Component } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'


export default class Footer extends Component {


   render() {
     return (
    <div className='footer'>
        <div className='footer-title'>
            <h1> Come and Join the World of Champions!</h1>
        </div>
            
        <div className='footer-links'>
          <div className='link'>
            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
          </div>

          <div className='link'>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'><FaInstagram/></a>
          </div>

          <div className='link'>
            <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
          </div>
      </div>
    </div>
      );
     }
   }
