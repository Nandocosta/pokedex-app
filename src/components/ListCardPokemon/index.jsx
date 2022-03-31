import React, { useEffect, useState } from 'react';

import CardPokemon from '../CardPokemon';
import './index.css'

const ListCardPokemon = ({pokemonData, favorites}) => {

    const [itensPerPage, setItensPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    const [ list, setList ] = useState()
        
    const RenderList = (param) => {
        const pages = Math.ceil(1000 / itensPerPage)
        let pokemonUnico = !Array.isArray(param) 
        param = Array.isArray(param) ? param : [param]
    
        return (
            <>
                {
                    param.map(pokemon => {                      
                        return (
                            <CardPokemon favorites={favorites} pokemon={pokemonUnico ? pokemon : pokemon.name }/> 
                        )
                    })
                }
            </>
        ) 
    }

    return RenderList(pokemonData[0])
    
   
}
 
export default ListCardPokemon ;
