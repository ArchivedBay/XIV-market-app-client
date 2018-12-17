import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ItemSearchPage from './pages/ItemSearchPage/ItemSearchPage';
import ItemResultPage from './pages/ItemResultPage/ItemResultPage';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './pages/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      needsStickyFooter: true
    } 
  }

  toggleFooter = () => {
    this.setState({needsStickyFooter: !this.state.needsStickyFooter})
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar auth={this.state.auth} />

          <Route exact path='/' component={ LandingPage } />
          <Route exact path='/search' component={ ItemSearchPage } />
          <Route exact path='/search/:serverName/:itemID' component={ ItemResultPage } />

          <Footer toggleFooter={this.toggleFooter} needsStickyFooter={this.state.needsStickyFooter}/>
        </div>
      </BrowserRouter>    
    );
  }
}

export default App;
