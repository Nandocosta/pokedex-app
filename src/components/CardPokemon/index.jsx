import React, { useEffect, useState} from "react";
import axios from "axios";
import { Card} from 'antd';
import { addPokemon, getPokemonsFavorites,removePokemon } from '../../Services/servicesPokelikes'
import { HeartOutlined,HeartFilled } from '@ant-design/icons';
import { Link } from "react-router-dom";

import './index.css'

const CardPokemon = ( {pokemon, favorites}) => {

    const [pokemonData, setPokemonData] = useState()
    const [isFavority, setisFavority]  = useState()
    
    useEffect(() => {
        getPokemon(pokemon.name)
    },[isFavority])

    const getPokemon = async (poke) => {
        try{
            const url = `https://pokeapi.co/api/v2/pokemon/${poke}`
            const res = await axios.get(url);
            const { data } = res
            setPokemonData(data)
            
        }catch(e){
            console.log(e)
        }
      }

    const favoritar = (pokemon) => {
        addPokemon(pokemon.id)
        setisFavority(true)
    }
    const desfavoritar = (pokemon) => {
        removePokemon(pokemon.id)
        setisFavority(false)
    }

    if (favorites){
        if( getPokemonsFavorites(pokemonData?.id) ){
            return (
                <div className='listCard'>
                    <Card size="small" 
                    title={`EXP ${pokemonData?.base_experience}`}
                    extra={
                        getPokemonsFavorites(pokemonData?.id) ?
                        <HeartFilled color="red" onClick={() => desfavoritar(pokemonData)}/> :
                        <HeartOutlined color="red"  onClick={() => favoritar(pokemonData)}/> 
                    }
                    className={`card-poke ${pokemonData?.types[0]?.type?.name}`}>
                        <div className="card-poke-img">
                            <img src={pokemonData?.sprites?.other?.dream_world['front_default']}/>
                        </div>
                        <div className="info-card-poke">
                            <span>
                                <h4>Nome: {pokemonData?.name}</h4>
                            </span>
                            <span>
                                <h5>Tipo: 
                                    {pokemonData?.types.map((pokemonType) => {
                                        return(
                                            <span> {pokemonType?.type?.name}</span>
                                        )
                                    })}
                                </h5>
                            </span>
                            <span>
                                <h5>Height: {''}{Math.round(pokemonData?.height * 3.9)}</h5>  
                            </span>
                        </div>
                    </Card>
                </div>
            )
        }else {return null}
       
    }else{   
        return (
            <div className='listCard'>
                <Card size="small" 
                title={`EXP ${pokemonData?.base_experience}`}
                extra={
                    getPokemonsFavorites(pokemonData?.id) ?
                    <HeartFilled color="red" onClick={() => desfavoritar(pokemonData)}/> :
                    <HeartOutlined color="red"  onClick={() => favoritar(pokemonData)}/> 
                }
                className={`card-poke ${pokemonData?.types[0]?.type?.name}`}>
                    <div className="card-poke-img">
                        <img src={pokemonData?.sprites?.other?.dream_world['front_default']}/>
                    </div>
                    <div className="info-card-poke">
                        <span>
                            <h4>Nome: {pokemonData?.name}</h4>
                        </span>
                        <span>
                            <h5>Tipo: 
                                {pokemonData?.types.map((pokemonType) => {
                                    return(
                                        <span> {pokemonType?.type?.name}</span>
                                    )
                                })}
                            </h5>
                        </span>
                        <span>
                            <h5>Height: {''}{Math.round(pokemonData?.height * 3.9)}</h5>  
                        </span>
                    </div>
                </Card>
            </div>
        )
    }
}

export default CardPokemon;
