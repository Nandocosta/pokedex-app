import React from "react"; 
import { 
    Form, 
    Input, 
    Button,
    Row,
    Col
} from 'antd';

import PainelPoker from "../../components/PainelPoker";

import './index.css'


const MinhaConta = ({onFinish,onFinishFailed}) => {

    const style = { background: '#0092ff', padding: '8px 0' };

    return(
        <PainelPoker>
            <div>
                <h1>Minha Conta</h1>
            </div>
            <div className='formMinhaConta'>
            <Form
                layout='vertical'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                
                <Row gutter={ 18 }>
                    <Col className="gutter-row" span={12} >
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
                    </Col>
                    <Col className="gutter-row" span={12} >
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
                            <Input  className='imput-item' />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={ 18 }>
                    <Col className="gutter-row" span={12}>
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
                            <Input.Password  className='imput-item'/>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={12} >
                        <Form.Item
                            label="Confirmar senha"
                            name="confimarPassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',                    
                                },
                            ]}
                        >
                            <Input.Password  className='imput-item'/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={24} >
                    <Form.Item>
                        <Button  className='Button-login'  type="primary" htmlType="submit">
                            Salvar alterações
                        </Button>
                    </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
        </PainelPoker>
    );

};

export default MinhaConta;