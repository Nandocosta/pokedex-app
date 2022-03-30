import React, { useEffect, useState } from 'react';

import CardPokemon from '../CardPokemon';
import './index.css'

const ListCardPokemon = ({pokemonData, favorites, getPokemon}) => {

    const [itensPerPage, setItensPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    const [ list, setList ] = useState()
        
    
    // const pagination = (offset) => {
    //     getPokemon(`?offset=${offset}&limit=6`)
    // }
   
    const RenderList = (param) => {
        const pages = Math.ceil(1000 / itensPerPage)
        let pokemonUnico = !Array.isArray(param) 
        param = Array.isArray(param) ? param : [param]
        // console.log(param)
        
        return (
            <>
                {
                    param.map(pokemon => {
                        // console.log(pokemon)
                        return (
                            <CardPokemon favorites={favorites} pokemon={pokemonUnico ? pokemon : pokemon.name }/> 
                        )
                    })
                }
                {/* <div>
                    { !favorites && Array.from(Array(pages), (_, index) => {
                        return <button onClick={() => pagination(index)}>{index}</button>
                    })}
                </div> */}
            </>
        ) 
    }

    return RenderList(pokemonData[0])
    
   
}
 
export default ListCardPokemon ;
