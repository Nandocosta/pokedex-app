import React from 'react';
import { Form, Input, Button,} from 'antd';

import 'antd/dist/antd.css';
import './Login.css'

function Login () {

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
                        <Button className='Button-login'  type="primary" htmlType="submit">
                            Entrar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}

export default Login;