import React from 'react';
import { Form, Input, Button,} from 'antd';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import './Cadastro.css'

function Cadastro ({onFinish, onFinishFailed}){
    

    return(
        
        <>
        <div className='form-login'>
            <Form
                layout='vertical'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                 <Form.Item 
                    label="Nome"
                    name="nome"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >   
                    <Input className='imput-item' />
                </Form.Item>
                <Form.Item 
                    label="Email"
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                    ]}
                >   
                    <Input className='imput-item' />
                </Form.Item>

                <Form.Item
                    label="Senha"
                    name="senha"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',                    
                        },
                    ]}
                >
                    <Input.Password  className='imput-item'/>
                </Form.Item>
                <Form.Item
                    label="Confirmar senha"
                    name="confimarSenha"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',                    
                        },
                    ]}
                >
                    <Input.Password  className='imput-item'/>
                </Form.Item>
                <Form.Item>
                    <Button  className='Button-login'  type="primary" htmlType="submit">
                        Registrar
                    </Button>
                </Form.Item>
            </Form>
        </div>

       <Link to='/' className='clique-aqui' >Já tenho uma conta? clique aqui</Link>
    </>
    )
}
export default Cadastro ;