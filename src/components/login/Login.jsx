import React from 'react';
import { Form, Input, Button,} from 'antd';
import { firebase, auth } from '../../services/firebase/firebase';

import 'antd/dist/antd.css';
import './Login.css'
import { Link } from 'react-router-dom';

function Login ({onFinish, onFinishFailed}) {

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
                    <Form.Item>
                        <Button  className='Button-login'  type="primary" htmlType="submit">
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