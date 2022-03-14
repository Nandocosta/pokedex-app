import React from 'react';

import CardPokemon from '../CardPokemon';
import './index.css'

const ListCardPokemon = ({pokemonData}) => {
    // console.log(pokemonData[0]?.results)
    
    const data = pokemonData
    console.log(data)
    const list = data[0]?.results || []
    
    
    return list.map(data => {
        // console.log(list)
        return (
            <div className='listCard'>
                <CardPokemon data={data} /> 
            </div>
        )
        
    })
}
 
export default ListCardPokemon ;
