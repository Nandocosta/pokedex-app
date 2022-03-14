import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Card} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HeartOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import axios from "axios";



import Logo from '../Logo/index';
import imagem from '../../images/pokeapi.png'

import './index.css'
import Search from '../Search/index';
import CardPokemon from '../CardPokemon';
import ListCardPokemon from '../ListCardPokemon';


const PainelPoker = ({children}) => {

    const { Header, Sider, Content } = Layout;

    const [collapse, setCollape] = useState(false)
    
    const toggle = () => setCollape(!collapse);

  //   const [pokemon, setPokemon] = useState('pikachu')
  //   const [pokemonData, setPokemonData] = useState([])
  //   const [pokemonType, setPokemonType] = useState('')
    

  //   useEffect( () => {
  //       pokeApi(setPokemon);
  //   }, []);

  //   const pokeApi = async () =>{
  //     const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon ?? ''}`)
  //     const convert = await data.json();
  //     setPokemon(convert)
  //   }

  //   const handleChange = (e) => {
  //     setPokemon(e.target.value.toLowerCase())
  // }
    const [pokemon, setPokemon] = useState('')
    const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
      getPokemon()
    }, [])

    const getPokemon = async () => {
      const toArray = []
      try{
          const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
          const res = await axios.get(url);
          toArray.push(res.data)
          setPokemonData(toArray)
          // console.log(res)
      }catch(e){
          // console.log(e);
      }
    }

 
        return (
          <Layout style={{height: '100vh' ,}} >
            <Sider style={{background: '#0877BB'}} trigger={null} collapsible collapsed={collapse} >
              <div className="logo" >
                  <Logo src={imagem}/>
            </div>
              <Menu style={{background: 'inherit'}} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  
                  <Link to="/home" >Pokemons</Link>

                </Menu.Item>
                <Menu.Item key="2" icon={<HeartOutlined />}>
                  
                  <Link to="/PokerLikes" >PokeLikes</Link>

                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>

                  <Link to="/MinhaConta">Minha Conta</Link>
                  
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout" >
              <Header className="site-layout-background" style={{ padding: 0 , background: '#0877BB'}}>
                {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                  onClick: toggle,
                })}
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <Search setPokemon={setPokemon} getPokemon={getPokemon} />
                <ListCardPokemon pokemonData={pokemonData} />
                {/* {pokemonData.map(data => {
                  <CardPokemon pokemonData={data} />
                })} */}
                     
              </Content>
            </Layout>
          </Layout>
        );
}
export default PainelPoker;