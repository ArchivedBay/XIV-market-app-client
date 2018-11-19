import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav class='top-nav'>
      <h3>XIV-Market-Info</h3>

      <div className="nav-links">
        <Link to='/news'> Lodestone News </Link>    
        <Link to='/search'> Item Search </Link>    
      </div>
    </nav>
  );
}

export default NavBar;