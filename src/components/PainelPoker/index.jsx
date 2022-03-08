import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HeartOutlined,
  HomeOutlined,
} from '@ant-design/icons';



import Logo from '../Logo/index';
import imagem from '../../images/pokeapi.png'

import './index.css'
import CardPokemon from '../CardPokemon';



const PainelPoker = () => {

    const { Header, Sider, Content } = Layout;

    const [collapse, setCollape] = useState(false)
    
    const toggle = () => setCollape(!collapse);

        return (
          <Layout  style={{height: '100vh',}} >
            <Sider trigger={null} collapsible collapsed={collapse} >
              <div className="logo" >
                  <Logo src={imagem}/>
            </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                  
                  <Link to="/home">Pokemons</Link>

                </Menu.Item>
                <Menu.Item key="2" icon={<HeartOutlined />}>
                  
                  <Link to="/PokerLikes">PokeLikes</Link>

                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>

                  <Link to="/MinhaConta">Minha Conta</Link>
                  
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(collapse? MenuUnfoldOutlined : MenuFoldOutlined, {
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
               <CardPokemon/>
              </Content>
            </Layout>
          </Layout>
        );
}
export default PainelPoker;