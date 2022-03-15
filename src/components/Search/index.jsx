import React from 'react';

import { FaSearch } from "react-icons/fa";
import CardPokemon from '../CardPokemon';


import './index.css'

const Search= ({setPokemon, getPokemon}) => {
    
    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase())
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon()
    }

    return(
        <div>
            <div className='seach-container'>
                    <input className='input-search' type="text" name='search' onChange={handleChange}/>
                <div>
                    <button className='input-searh-button' onClick = {handleSubmit} ><FaSearch /></button>
                </div>
            </div>
        </div>
        )
}
export default Search;