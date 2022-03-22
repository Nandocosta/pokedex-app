import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu} from 'antd';
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
import Search from '../Search/index';
import ListCardPokemon from '../ListCardPokemon';

import './index.css'

const PainelPoker = ({children, favorites = false, telaSelected}) => {

  const [collapse, setCollape] = useState(false)
  // const [pokemon, setPokemon] = useState('')
  // const [pokemonData, setPokemonData] = useState([])
  
  const toggle = () => setCollape(!collapse);
  const { Header, Sider, Content } = Layout;

  const enumSelecteds = {
    pokemons: "1",
    PokeLikes: "2",
    MinhaConta: "3",
  }

  return (
    <Layout style={{height: '100vh' ,}} >
      <Sider style={{background: '#0877BB'}} trigger={null} collapsible collapsed={collapse} >
        <div className="logo" >
            <Logo src={imagem}/>
      </div>
        <Menu style={{background: 'inherit'}} theme="dark" mode="inline" defaultSelectedKeys={[enumSelecteds[telaSelected]]}>
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
        <Header className="site-layout-background" style={{padding: 0, background: '#0877BB'}}>
          {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 100px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}

        </Content>
      </Layout>
    </Layout>
  );
}
export default PainelPoker;