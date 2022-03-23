import React, { useEffect, useState }from "react";

import {getPokemonsFavorites} from "../../Services/servicesPokelikes"
import PainelPoker from "../../components/PainelPoker";
import Search from "../../components/Search";
import axios from "axios";
import ListCardPokemon from "../../components/ListCardPokemon";

const PokeLikes = () => {

    const [pokemon, setPokemon] = useState('?offset=0&limit=6')
    const [pokemonData, setPokemonData] = useState([])
    
    useEffect(() => {
        getPokemon()
    }, [])
    
    const getPokemon = async (offset) => {
    const toArray = []
    try{
        const offsetDefault = "?offset=0&limit=6"
        const queryParam = offset || ""
        const url = `https://pokeapi.co/api/v2/pokemon/${queryParam}`
        const res = await axios.get(url);
        toArray.push(res.data)
        const listStored = getPokemonsFavorites()
        const pokeLikesFavorites = toArray && toArray[0]?.results?.filter( async (e) => {
            const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${e.name}`
            const resPokemon = await axios.get(urlPokemon);
            const currentpokemon = resPokemon?.data 
            return listStored.includes(currentpokemon.id)
        })
        console.log(pokeLikesFavorites)
        setPokemonData(pokeLikesFavorites)
    }catch(e){
        // console.log(e);
    }
    }

    return(
        <PainelPoker telaSelected={'PokeLikes'}  >
            <Search/>
            <ListCardPokemon pokemonData={pokemonData} favorites = {true}/>
        </PainelPoker>
    );
}
export default PokeLikes;