import React, { useState } from 'react';
import { Form, Input, Button,} from 'antd';
import { Link } from 'react-router-dom';

import './Login.css'

function Login ({onFinish, onFinishFailed}) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                        label="Email"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >   
                        <Input className='imput-item' onChange={ e => setEmail=(e.target.value)} value={email}/>
                    </Form.Item>

                    <Form.Item
                        label="Senha"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',                    
                            },
                        ]}
                    >
                        <Input.Password  className='imput-item' onChange={ e => setPassword=(e.target.value)} value={password}/>
                    </Form.Item>
                    <Form.Item>
                        <Button  className='Button-login' type="primary" htmlType="submit">
                            Entrar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Link to='/cadastro' className='cadastro'>Ainda não possui uma conta? Cadastre-se</Link>
        </>
    );
}

export default Login;