import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='primary-bg white-text'>
      <p className='copyright-stuff'>
        "FINAL FANTASY" is a registered trademark of Square Enix Holdings Co., Ltd.
        All other trademarks are property of their respective owners.
      </p>
      <p className='copyright-stuff'>
        This app utilizes data retrieved from the <a href='https://xivapi.com/'>XIV API </a>
        Further copyright and usage information can be seen <Link to='/copyright'>here.</Link>
      </p>
      <p className="copyright-stuff">
        This app was made by Skyelah :) 
      </p>
    </footer>
  );
}

export default Footer;