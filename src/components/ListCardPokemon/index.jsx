import { wait } from '@testing-library/user-event/dist/utils';
import { Button } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Item from 'antd/lib/list/Item';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import CardPokemon from '../CardPokemon';
import './index.css'

const ListCardPokemon = ({pokemonData, favorites, getPokemon}) => {

    const [itensPerPage, setItensPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)

    const data = pokemonData
    const list = data[0]?.results || []
    const listFavorites = [] 

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

    return favorites ? RenderList(listFavorites) : RenderList(list)
    
   
}
 
export default ListCardPokemon ;
