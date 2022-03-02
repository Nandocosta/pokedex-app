import React, { useState } from 'react';
import firebase from '../../firebaseConfig';

import Cadastro from '../../components/cadastro/Cadastro';

import { message, Button } from 'antd';

const Page = () => {

    const onFinish = (values) => {
        // console.log('Success:', values);
        const auth = firebase.getAuth()
        const {email, password, confimarPassword} = values

        
        if(password != confimarPassword) {
            
                message.error('Senhas diferentes');
        } else {
            firebase.createUserWithEmailAndPassword(auth, email, password).then(user => {
            console.log(user)
            })
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
   
    return (
        <>
            <div>
               <Cadastro onFinish={onFinish} onFinishFailed={onFinishFailed}/>
            </div>
        </>
    );
}
export default Page;