import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NewsPage from './pages/NewsPage/NewsPage';
import ItemSearchPage from './pages/ItemSearchPage/ItemSearchPage';
import ItemResultPage from './pages/ItemResultPage/ItemResultPage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      auth: null
    } //we'll set auth state here later because we want it ASAP.
  }


  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar auth={this.state.auth} />

          <Route exact path='/news' component={ NewsPage } />
          <Route exact path='/search' component={ ItemSearchPage } />
          <Route exact path='/search/:itemID' component={ ItemResultPage } />

          <Footer />
        </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
