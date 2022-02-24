import React from 'react';
import { Form, Input, Button,} from 'antd';
import reactRouterDom from 'react-router-dom';

import 'antd/dist/antd.css';
import './Cadastro.css'

function Cadastro (){

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
                <Form.Item>
                    <Button  className='Button-login'  type="primary" htmlType="submit">
                        Entrar
                    </Button>
                </Form.Item>
            </Form>
        </div>

        <a className='clique-aqui' link='/' >Já tenho uma conta? clique aqui</a>
    </>
    )
}
export default Cadastro ;