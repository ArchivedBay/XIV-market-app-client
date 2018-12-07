import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <nav className='top-nav primary-bg white-text'>
      <div className="logo">
        <Link to='/'> XIV-Market-Info </Link>
      </div>

      <div className="nav-links">  
        <Link to='/search' className='white-text'> Item Search </Link>    
      </div>
    </nav>
  );
}

export default NavBar;