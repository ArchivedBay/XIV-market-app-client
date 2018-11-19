import React, { Component } from 'react';
import xivAPI from '../../api/xiv-api';

import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResult from '../../components/SearchResult/SearchResult';

class ItemSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      results: []
    };
  }

  handleItemSearch = (event) => {
    event.preventDefault();

    xivAPI.itemSearch(event.target.elements[0].value)
      .then( itemResults => this.setState({ results: itemResults.Results }))
      .catch( error => console.log(error) )
  }

  renderSearchResults = () => {
    if(this.state.results.length > 0){
      return this.state.results.map( (result, index) => {
        return <SearchResult key={index+1} result={result} />
      })
    }
  }



  render() {
    return (
      <div id="search-page">
        <h1> Search for an item </h1>
        <SearchForm form-type='itemSearch' handler={this.handleItemSearch} />

        <div className="searchResults">
          {this.renderSearchResults()}
        </div>
      </div>
    );
  }
}

export default ItemSearchPage;