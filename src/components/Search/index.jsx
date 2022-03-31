import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

import './index.css'

const Search = ({getPokemon}) => {
    
    const[ pokemon, setPokemon ] = useState()

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase())
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon(pokemon)
    }

    return(
    
        <div className='seach-container'>
                <input className='input-search' type="text" name='search' onChange={handleChange}/>
            <div>
                <button className='input-searh-button' onClick={handleSubmit} ><FaSearch /></button>
            </div>
        </div>

    )
}
export default Search;