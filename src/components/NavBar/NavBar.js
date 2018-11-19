import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <nav className='top-nav primary-bg white-text'>
      <h3>XIV-Market-Info</h3>

      <div className="nav-links">
        <Link to='/news' className='white-text'> Lodestone News </Link>    
        <Link to='/search' className='white-text'> Item Search </Link>    
      </div>
    </nav>
  );
}

export default NavBar;