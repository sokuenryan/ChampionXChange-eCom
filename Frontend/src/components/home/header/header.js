import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../../../static/assets/images/logo.png';


export default function Header() {
     return (
        <div className='header'>
          <Link to="/">
            <img src={LogoImage}></img>
            <h4>Return to home</h4>
          </Link>
        </div>
      );
   }