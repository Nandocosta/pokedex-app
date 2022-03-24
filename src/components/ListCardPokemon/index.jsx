import React, { useEffect, useState } from 'react';

import CardPokemon from '../CardPokemon';
import './index.css'

const ListCardPokemon = ({pokemonData, favorites, getPokemon}) => {

    const [itensPerPage, setItensPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)

    
        const data = pokemonData
        const list = data[0]?.results || []
        const listFavorites = pokemonData || []

        console.log(list)

    const pagination = (offset) => {
        getPokemon(`?offset=${offset}&limit=6`)
    }
   
    const RenderList = (param) => {
        const pages = Math.ceil(1000 / itensPerPage)
        // console.log(param.length)
        return (
            <>
                {
                    param.map(pokemon => {
                        
                        return (
                            
                            <CardPokemon favorites={favorites} pokemon={pokemon}/> 
                        )
                    })
                }
                <div>
                    { !favorites && Array.from(Array(pages), (_, index) => {
                        return <button onClick={() => pagination(index)}>{index}</button>
                    })}
                </div>
            </>
        ) 
    }

    return RenderList(list)
    
   
}
 
export default ListCardPokemon ;
