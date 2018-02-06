import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Our Marketplace</h1>
      <Link to='/'>Home</Link> | <Link to='/croplist'>Whats good during the year</Link>
    </div>
  );
}

export default Header;
