import React, { useState } from 'react';

import CardPokemon from '../CardPokemon';
import './index.css'

const ListCardPokemon = ({pokemonData, favorites, getPokemon}) => {

    const [itensPerPage, setItensPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)

    const data = pokemonData
    const list = favorites ? pokemonData : data[0]?.results || []
    const listFavorites = pokemonData

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
                            <div className='listCard'>
                                <CardPokemon pokemon={pokemon}/> 
                            </div>
                        )
                    })
                }
                <div>
                    {Array.from(Array(pages), (_, index) => {
                        return <button onClick={() => pagination(index)}>{index}</button>
                    })}
                </div>
            </>
        ) 
    }

    return RenderList(list)
    
   
}
 
export default ListCardPokemon ;
