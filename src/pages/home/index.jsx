import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HeartOutlined,
  HomeOutlined,
} from '@ant-design/icons';


import Logo from '../../components/Logo';

import './index.css'



const Home = () => {

    const { Header, Sider, Content } = Layout;

    const [collapse, setCollape] = useState(false)
    
    const toggle = () => setCollape(!collapse);

        return (
          <Layout  style={{height: '100vh',}} >
            <Sider trigger={null} collapsible collapsed={collapse} >
              <div className="logo" >
                  <Logo src={Logo}/>
            </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                  Pokemons
                </Menu.Item>
                <Menu.Item key="2" icon={<HeartOutlined />}>
                  PokeLikes
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                  Minha Conta
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
                Content
              </Content>
            </Layout>
          </Layout>
        );
}
export default Home;