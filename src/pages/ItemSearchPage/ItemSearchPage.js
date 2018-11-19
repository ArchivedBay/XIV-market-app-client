import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm'

class ItemSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      results: []
    };
  }

  handleItemSearch = (event) => {
    event.preventDefault();


  }

  render() {
    return (
      <div id="search-page">
        <h1> Search for an item </h1>
        <SearchForm form-type='itemSearch' handler={this.handleItemSearch}/>
      </div>
    );
  }
}

export default ItemSearchPage;