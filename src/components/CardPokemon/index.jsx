import React, { useEffect, useState } from "react";
import { Card } from 'antd';

import { HeartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import Api from "../../Services"

const CardPokemon = () => {

    const {pokemon, setPokemon} = useState("")
    const {pokemonName, setPokemonName} = useState("")
    const {pokemonType, setPokemonType} = useState("")

    useEffect(() => {
        Api.get("/Pokemons")
    }, [])
    
    return (
        <div CardPoker>
            <Card size="small" 
            title="Small size card" 
            extra={<Link to = "/PokerLikes"><HeartOutlined/></Link>} 
            style={{ width: 300 }}>
               
                <p>Card content</p>

            </Card>
        </div>
    )
}
export default CardPokemon;