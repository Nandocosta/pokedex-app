import React, { useEffect, useState }from "react";

import {getPokemonsFavorites} from "../../Services/servicesPokelikes"
import PainelPoker from "../../components/PainelPoker";
import Search from "../../components/Search";
import axios from "axios";
import ListCardPokemon from "../../components/ListCardPokemon";

const PokeLikes = () => {
        const [pokemon, setPokemon] = useState('')
        const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
        getPokemon()
    }, [pokemon])
    
    const getPokemon = async (offset) => {
    const toArray = []
    try{
        const offsetDefault = "?offset=0&limit=6"
        const queryParam = offset || ""
        console.log(queryParam)
        const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=800${pokemon}`
        const res = await axios.get(url);
        toArray.push(res.data)
        setPokemonData(toArray)
    }catch(e){
        // console.log(e);
    }
    }

    return(
        <PainelPoker telaSelected={'PokeLikes'}  >
            <Search setPokemon={setPokemon} getPokemon={getPokemon}/>
            <ListCardPokemon pokemonData={pokemonData} favorites = {true}/>
        </PainelPoker>
    );
}
export default PokeLikes;