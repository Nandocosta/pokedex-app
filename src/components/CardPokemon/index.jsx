import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from 'antd';

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
            // console.log(e);
        }
      }

    return (
        <div>
            <Card className ='card-poke' size="small" 
            title="Small size card" 
            extra={<Link to = "/PokerLikes"><HeartOutlined/></Link>} 
            style={{background: 'pink'}}>
                <div>
                    <img style={{width: '250px'}} src={pokemonData?.sprites && pokemonData?.sprites['front_default']}/>
                    <div>
                        <h1>Tipo</h1>
                        {console.log(pokemonData)}
                        
                        
                    </div>
                    <div>
                        <h1>Height</h1>
                        {''}{Math.round(pokemonData?.height * 3.9)}
                    </div>

                </div> 
            </Card>
        </div>
    )
}
export default CardPokemon;
