import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Search from '../../components/Search/index';
import ListCardPokemon from '../../components/ListCardPokemon';
import PainelPoker from '../../components/PainelPoker';
import { Pagination } from 'antd';

import './index.css'

const Home = () => {
    
    const [pokemonData, setPokemonData] = useState([])
    
    useEffect(() => {
        getPokemon()
    }, [])
    
    const getPokemon = async (query) => {
            setPokemonData([])
        const toArray = []
        try{
            const offsetDefault = "?offset=0&limit=9"
            const queryParam = query || offsetDefault
            const url = `https://pokeapi.co/api/v2/pokemon/${queryParam}`
            const res = await axios.get(url);
            const results = res?.data?.results ? [...res?.data?.results] : [{name: res?.data?.name}] || []
            toArray.push(results)
            setPokemonData(toArray)
        }catch(e){
            // console.log(e);
        }
    }

    const existePokeData = pokemonData[0]?.length

    function onChangePagination (current, pageSize){
        getPokemon( `?offset=${current}&limit=${pageSize}`);
    }

    // function onShowSizeChange(current, pageSize) {
    //     console.log(current, pageSize);
    // }

    return (
        <PainelPoker telaSelected={"pokemons"}>
            <div className='layout-home'>
                <Search getPokemon={getPokemon}/>
                {existePokeData && <ListCardPokemon pokemonData={pokemonData} getPokemon={getPokemon} />}

                <div className='box-pagination'>
                    <Pagination 
                        showSizeChanger
                        pageSizeOptions={[6,7,8,9]}
                        onChange={onChangePagination}
                        // onShowSizeChange={onShowSizeChange}
                        defaultCurrent={1}
                        total={1200}
                    />
                </div>
            </div>
        </PainelPoker>
    );
}; 
export default Home;