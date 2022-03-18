import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Search from '../../components/Search/index';
import ListCardPokemon from '../../components/ListCardPokemon';
import PainelPoker from '../../components/PainelPoker';

const Home = () => {
    const [pokemon, setPokemon] = useState('')
    const [pokemonData, setPokemonData] = useState([])
    
    useEffect(() => {
        getPokemon()
    }, [])
    
    const getPokemon = async () => {
    const toArray = []
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const res = await axios.get(url);
        toArray.push(res.data)
        setPokemonData(toArray)
    }catch(e){
        // console.log(e);
    }
    }

    return (
        <PainelPoker telaSelected={"pokemons"}>
           <Search setPokemon={setPokemon} getPokemon={getPokemon}/>
            <div >
                <ListCardPokemon pokemonData={pokemonData}  />
            </div>
        </PainelPoker>
    );
}; 
export default Home;