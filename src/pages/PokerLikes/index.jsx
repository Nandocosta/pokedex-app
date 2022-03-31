import React, { useEffect, useState }from "react";

import PainelPoker from "../../components/PainelPoker";
import Search from "../../components/Search";
import axios from "axios";
import ListCardPokemon from "../../components/ListCardPokemon";
import { Pagination } from 'antd';

import './index.css'

const PokeLikes = () => {
        const [pokemon, setPokemon] = useState('')
        const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
        getPokemon()
    }, [pokemon])
    
    const getPokemon = async (offset) => {
        setPokemonData([])
        const toArray = []
        try{
            const offsetDefault = `?offset=0&limit=1200`
            const queryParam = offset || pokemon  || offsetDefault
            const url = `https://pokeapi.co/api/v2/pokemon/${queryParam}`
            const res = await axios.get(url);
            const results = res?.data?.results || res?.data?.name || []
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

    return(
        <PainelPoker telaSelected={'PokeLikes'}  >
            <div className='layout-home-like'>
                <Search setPokemon={setPokemon} getPokemon={getPokemon}/>
                {existePokeData && <ListCardPokemon pokemonData={pokemonData} favorites = {true}/>}

                <div className='box-pagination-likes'>
                    <Pagination 
                        showSizeChanger
                        pageSizeOptions={[6,7,8,9,10]}
                        onChange={onChangePagination}
                        // onShowSizeChange={onShowSizeChange}
                        defaultCurrent={1}
                        total={1200}
                    />
                </div>
            </div>
        </PainelPoker>
    );
}
export default PokeLikes;