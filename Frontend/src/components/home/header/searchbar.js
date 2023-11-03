import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
//import axios here

export default function SearchBar() {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isActive, setIsActive] = useState(false);

  // const options = ['Option 1', 'Option 2', 'Option 3'];
  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  // };

  const handleSearch = () => {
    const searchResult = `Searching for ${selectedOption} - ${searchQuery}`;
    console.log(searchResult);
    setSearchQuery('');
    setSelectedOption('');
  };

  return (
    <div className='searchbar'>
      <button onClick={handleSearch}><FaSearch style={{ fontSize: '20px', opacity:'80%', fontWeight: 'lighter'}} /></button>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className={`searchbar-input ${isActive ? 'active' : 'default'}`}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />


      {/* <select value={selectedOption} onChange={(e) => handleOptionSelect(e.target.value)}>
        <option value="">All Categories</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select> */}
    </div>
  );
}