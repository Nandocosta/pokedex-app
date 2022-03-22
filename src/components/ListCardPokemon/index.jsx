import { wait } from '@testing-library/user-event/dist/utils';
import { Content } from 'antd/lib/layout/layout';
import Item from 'antd/lib/list/Item';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import CardPokemon from '../CardPokemon';
import './index.css'

const ListCardPokemon = ({pokemonData, favorites}) => {

    

    const data = pokemonData
    const list = data[0]?.results || []
    const listFavorites = [] 
   
    const renderList = (param) => {
        // const pageList = param.slice(6, 12)
        return (
            <>
                {param.map(pokemon => {
                    return (
                        <div>
                            <div className='listCard'>
                                <CardPokemon pokemon={pokemon}/> 
                            </div>
                        </div>
                    )
                })}
            </>
        ) 
    }

    return favorites ? renderList(listFavorites) : renderList(list)
    
   
}
 
export default ListCardPokemon ;
