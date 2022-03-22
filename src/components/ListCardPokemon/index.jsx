import { Content } from 'antd/lib/layout/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import CardPokemon from '../CardPokemon';
import './index.css'

const ListCardPokemon = ({pokemonData, favorites}) => {

    const [itens, setItens] = useState('')
    const [itensPerPage, setItensPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)

    const pageList = Math.ceil(itens.length / itensPerPage)

    // console.log(pages)

    const data = pokemonData
    const list = data[0]?.results || []
    const listFavorites = [] 

    const renderList = (param) => {
        const pageList = param.slice( 6, 12)

        return pageList.map(pokemon => {
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
