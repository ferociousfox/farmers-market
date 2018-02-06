import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const linkStyle = {
    textDecoration: 'none'
  };
  return (
    <div>
      <h1>Our Marketplace</h1>
      <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/croplist'>Whats good during the year</Link>
      <style jsx>{`
        h1 {
          text-align: center;
        }
        Link {
          text-decoration: none;
        }

      `}</style>
    </div>
  );
}

export default Header;
