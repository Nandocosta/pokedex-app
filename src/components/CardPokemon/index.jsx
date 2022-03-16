import React, { useEffect, useState, version } from "react";
import axios from "axios";
import { Card} from 'antd';

import { HeartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import './index.css'

const CardPokemon = ( {pokemon}) => {

    const [pokemonData, setPokemonData] = useState()
    useEffect(() => {
        getPokemon(pokemon.name)
    },[])
      
    const getPokemon = async (poke) => {
        try{
            const url = `https://pokeapi.co/api/v2/pokemon/${poke}`
            const res = await axios.get(url);
            setPokemonData(res.data)
        }catch(e){
            // console.log(e)

        }
      }

    return (
        <div>
            <Card className ='card-poke' size="small" 
            title={`EXP ${pokemonData?.base_experience}`}
            extra={<Link to = "/PokerLikes"><HeartOutlined/></Link>} 
            style={{background: 'white'}}>
                <div>
                    <img style={{width: '250px'}} src={pokemonData?.sprites['front_default']}/>
                    <div>
                        <span>
                            <h4>Nome: {pokemonData?.name}</h4>
                            {console.log(pokemonData)}
                            
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

                </div> 
            </Card>
        </div>
    )
}
export default CardPokemon;
