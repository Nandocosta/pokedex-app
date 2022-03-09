import React, { useEffect, useState } from "react";
import { Card } from 'antd';

import { HeartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
// import axios from "axios";
// import { async } from "@firebase/util";
import './index.css'



const CardPokemon = () => {
// useEffect (() => {

//     const fetchPokemon = async () => {
    
//         const response = await axios.get(
//             'https://pokeapi.co/api/v2/pokemon/ditto'
//         );
//         console.log(response);
//     }

// }, [])
    const [buscar, setBusca] = useState()

    return (

        <div >
            <Card className ='card-poke' size="small" 
            title="Small size card" 
            extra={<Link to = "/PokerLikes"><HeartOutlined/></Link>} 
            style={{background: 'pink'}}>
                <div>
                    {buscar}
                </div>
                
                <button onClick={() => setBusca()}>pokemon</button>
            </Card>
        </div>
    )
}
export default CardPokemon;
