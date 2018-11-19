import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  return (
    <form onSubmit={props.handler} className='item-search-form'>
      <input type='text' name='query[queryString]' className='item-search-bar' placeholder='i.e Cashmere Poncho'/>
      <button className="item-search-submit primary-color"><i className="fas fa-search"></i></button>
    </form>
  );
}

export default SearchForm;