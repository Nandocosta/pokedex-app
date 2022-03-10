import React, { useEffect, useState } from "react";
import { Card } from 'antd';

import { HeartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import axios from "axios";

import './index.css'



const CardPokemon = () => {

    const [pokemon, setPokemon] = useState('pikachu')
    const [pokemonData, setPokemonData] = useState([])
    const [pokemonType, setPokemonType] = useState('')

    const getPokemon = async () => {
        const toArray = []
        try{
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const res = await axios.get(url);
            toArray.push(res.data)
            setPokemonType(res.data.types[0].type.name)
            setPokemonData(toArray)
            console.log(res)
        }catch(e){
            console.log(e);
        }
    }
    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase())
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    }

    return (

        <div >
            <div>
                <input type="text" onChange={handleChange}/>
                <button onClick = {handleSubmit} >Buscar</button>
            </div>
            <Card className ='card-poke' size="small" 
            title="Small size card" 
            extra={<Link to = "/PokerLikes"><HeartOutlined/></Link>} 
            style={{background: 'pink'}}>
                {pokemonData.map((data) => {
                    return (
                        <div>
                            <img style={{width: '20px'}} src={data.sprites['front_default']}/>
                            <div>
                                <h1>Tipo</h1>
                                {pokemonType}
                            </div>
                            <div>
                                <h1>Height</h1>
                                {''}{Math.round(data.height * 3.9)}
                            </div>

                        </div> 
                        )
                })}
                
                {/* <button onClick={() => setPokemon(handleSubmit)}>pokemon</button> */}
            </Card>
        </div>
    )
}
export default CardPokemon;
