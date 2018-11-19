import React from 'react';
import './SearchResult.css'

const SearchResult = (props) => {
  return (
    <div className="search-result">
      <img src="x" alt=""/>
      <h3> {props.result.Name} </h3>
    </div>
  );
}

export default SearchResult;