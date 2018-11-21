import React from 'react';
import './SearchForm.css';

const worldList = [
  "Aegis", "Atomos", "Carbuncle", "Garuda", "Kujata", "Ramuh", "Tonberry", 
  "Typhon", "Unicorn", "Alexander", "Durandal", "Fenrir", "Ifrit", "Ridill", 
  "Tiamat", "Ultima", "Valefor", "Yojimbo", "Zeromus", "Anima", "Asura", "Belias", 
  "Hades", "Ixion", "Masamune", "Pandaemonium", "Titan", "Adamantoise", 
  "Cactuar", "Coeurl", "Faerie", "Gilgamesh", "Goblin", "Jenova", "Mateus", "Midgardsormr", 
  "Sargatanas", "Siren", "Zalera", "Behemoth", "Brynhildr", "Diabolos", "Excalibur", "Exodus", "Famfrit", 
  "Hyperion", "Lamia", "Leviathan", "Malboro", "Ultros", "Cerberus", "Lich", "Louisoix", "Moogle", 
  "Odin", "Omega", "Phoenix", "Ragnarok", "Shiva", "Zodiark"
];

const SearchForm = (props) => {
  return (
    <form onSubmit={props.handler} className='item-search-form'>
      <input type='text' name='query[itemName]' className='item-search-bar' placeholder='i.e Cashmere Poncho'/>
      <select>
        { worldList.map( (world) => <option value={world}> {world} </option> ) }
      </select>

      <button className="item-search-submit primary-color"><i className="fas fa-search"></i></button>
    </form>
  );
}

export default SearchForm;