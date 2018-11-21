import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css'

const SearchResult = (props) => {
  return (
    <div className="search-result">
      <img src="x" alt=""/>
      <Link to={`/search/${props.serverName}/${props.result.ID}`} > {props.result.Name} </Link>
    </div>
  );
}

export default SearchResult;