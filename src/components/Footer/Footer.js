import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {

  componentDidMount(){
    if (!window.location.href.match(/(\/search)|(\/search\/.*)/gi ) ) {
      this.props.toggleFooter();
    }
  }
  

  render(){
    return (
      <footer className={`primary-bg white-text ${this.props.needsStickyFooter ? 'sticky' : 'non-sticky'}`}>
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
  
}

export default Footer;

//str.match(/ (\/search)|(\/search\/.*)/gi );