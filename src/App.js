import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import NewsPage from './pages/NewsPage/NewsPage'
import ItemSearchPage from './pages/ItemSearchPage/ItemSearchPage'

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
          <Route exact path='/news' component={ NewsPage } />
          <Route exact path='/search' component={ ItemSearchPage } />
        </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
