import React, { useEffect, useState} from "react";
import axios from "axios";
import { Card} from 'antd';

import { HeartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import './index.css'

const CardPokemon = ( {pokemon}) => {

    
    const [pokemonData, setPokemonData] = useState()
    // const [itensPerPage, setItensForPage] = useState [6]
    // const [currentPage, setCurrentPage] = useState [0]

    // const pages = Math.ceil(pokemon.length / itensPerPage)
    
    useEffect(() => {
        getPokemon(pokemon.name)
    },[])

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
       
    return (
        <div>
            <Card size="small" 
            title={`EXP ${pokemonData?.base_experience}`}
            extra={<Link to = "/PokerLikes"><HeartOutlined/></Link>}
            className={`card-poke ${pokemonData?.types[0]?.type?.name}`}>
                <img style={{width: '180px'}} src={pokemonData?.sprites['front_default']}/>
                <div>
                    {/* <div>{pages}</div> */}
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
export default CardPokemon;
