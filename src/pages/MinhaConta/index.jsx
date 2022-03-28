import React, { useState,useEffect } from "react"; 
import { 
    Form, 
    Input, 
    Button,
    Row,
    Col
} from 'antd';


import PainelPoker from "../../components/PainelPoker";

import './index.css'
import firebase from "../../firebaseConfig";

const MinhaConta = ({onFinish, onFinishFailed}) => {

    const [user, setUser] = useState()

    const [fields, setFields] = useState([])

    useEffect( () => {
        const userStorage = JSON.parse(localStorage.getItem("Usuario"))
        setTimeout(()=>{
            const currentUser =  firebase.auth.currentUser
            setUser(currentUser)
        }, 1000)
        

        // .getUser(userStorage.uid)
        // .then((userRecord) => {
        //     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
        //   })
        //   .catch((error) => {
        //     console.log('Error fetching user data:', error);
        //   });
    }, [])

    useEffect(()=> {
        const nwFields = [
            {
              name: ['nome'],
              value: user?.displayName,
            },
            {
              name: ['email'],
              value: user?.email,
            },
        ]
        setFields(nwFields)
    }, [user])

    const style = { background: '#0092ff', padding: '8px 0' };

    const CustomizedForm = ({ onChange, fields }) => (
        <Form
            layout='vertical'
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            fields={fields}
            onFieldsChange={(_, allFields) => {
                onChange(allFields);
            }}
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
      );

    return(
        <PainelPoker telaSelected={'MinhaConta'}>
            <div>
                <h1>Minha Conta</h1>
            </div>
            <div className='formMinhaConta'>
                <CustomizedForm
                    fields={fields}
                    onChange={(newFields) => {
                    setFields(newFields);
                    }}
                />
            </div>
        </PainelPoker>
    );
};

export default MinhaConta;