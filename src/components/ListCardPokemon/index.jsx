import React from 'react';

import CardPokemon from '../CardPokemon';
import './index.css'

const ListCardPokemon = ({pokemonData, favorites}) => {

    const data = pokemonData
    const list = data[0]?.results || []
    const listFavorites = [] 

    const renderList = (param) => {
        return param.map(pokemon => {
            return (
                <div className='listCard'>
                    <CardPokemon pokemon={pokemon}/> 
                </div>
            )
        })
    }

    return favorites ? renderList(listFavorites) : renderList(list)
    
   
}
 
export default ListCardPokemon ;
