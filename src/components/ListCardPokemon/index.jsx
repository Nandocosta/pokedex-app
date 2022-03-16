import React from 'react';

import CardPokemon from '../CardPokemon';
import './index.css'

const ListCardPokemon = ({pokemonData}) => {

    const data = pokemonData

    const list = data[0]?.results || []
    
    return list.map(pokemon => {

        return (
            <div className='listCard'>
                <CardPokemon pokemon={pokemon}/> 
            </div>
        )
        
    })
}
 
export default ListCardPokemon ;
