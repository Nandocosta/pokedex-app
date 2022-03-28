import React, { useState } from 'react';
import firebase from '../../firebaseConfig';

import Cadastro from '../../components/cadastro/Cadastro';

import { message, Button } from 'antd';


const Page = () => {

    const onFinish = (values) => {
        // console.log('Success:', values);
        const auth = firebase.getAuth()
        const {email, password, nome, confimarPassword} = values

        
        if(password != confimarPassword) {
            
                message.error('Senhas diferentes');
        } else {
            firebase.createUserWithEmailAndPassword(auth, email, password).then(data => {
                // console.log(data.user.auth.currentUser)
                firebase.updateProfile(data.user.auth.currentUser, {
                    displayName: nome
                  }).then(console.log)
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