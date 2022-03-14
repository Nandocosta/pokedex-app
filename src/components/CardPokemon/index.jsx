import React, { useEffect, useState } from "react";
import { Card } from 'antd';

import { HeartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import './index.css'



const CardPokemon = ( {data}) => {
    // console.log(data)
    return (
        <div>
            <Card className ='card-poke' size="small" 
            title="Small size card" 
            extra={<Link to = "/PokerLikes"><HeartOutlined/></Link>} 
            style={{background: 'pink'}}>
                <div>
                    {/* <img style={{width: '250px'}} src={data?.sprites && data?.sprites['front_default']}/> */}
                    <div>
                        <h1>Tipo</h1>
                        {data?.url}
                    </div>
                    <div>
                        <h1>Height</h1>
                        {/* {''}{Math.round(data?.height * 3.9)} */}
                    </div>

                </div> 
            </Card>
        </div>
    )
}
export default CardPokemon;
