import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  return (
    <form onSubmit={props.handler} className='item-search-form'>
      <input type='text' name='query[queryString]' className='item-search-bar'/>
      <button className="item-search-submit primary-bg white-text">Search</button>

    </form>
  );
}

export default SearchForm;