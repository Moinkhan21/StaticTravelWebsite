import React from 'react';
import globe from '../assets/globe.png';
import marker from '../assets/marker.png';

const Header = () => {
  return (
    <header>
      <img src={globe} alt="globe" />
      <h1>My travel Journal</h1>
    </header>
  );
};

export default Header;
