import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='menu'>
      <div className='menu-list'>
       <div className='dropdown-button'>
        <button onClick={toggleDropdown}>
            Menu
          </button>
      </div>
        <div className='linked-items'>
          {isDropdownOpen && (
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
          )}
        </div>
      </div>
    </nav>
  );
}

export default Menu;
