import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-list'>
          <ul>
            <li>
              <Link to="/trading">
                <button className='btn'>Trading</button>
              </Link>
            </li>

            <li>
              <Link to="/selling">
                <button className='btn'>Selling</button>
              </Link>
            </li>

            <li>
              <Link to="/thrift">
                <button className='btn'>Thift Store</button>
              </Link>
            </li>

            <li>
              <Link to="/cards">
                <button className='btn'>Trading Cards</button>
              </Link>
            </li>

            <li>
              <Link to="/jerseys">
                <button className='btn'>Jerseys</button>
              </Link>
            </li>

            <li>
              <Link to="/sporting-goods">
                <button className='btn'>Sporting Goods</button>
              </Link>
            </li>

            <li>
              <Link to="/referees">
                <button className='btn'>For Referees</button>
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  )}
  
export default Navbar;
