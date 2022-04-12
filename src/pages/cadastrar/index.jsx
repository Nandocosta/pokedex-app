import React, { useState } from 'react';
import firebase from '../../firebaseConfig';

import Cadastro from '../../components/cadastro/Cadastro';
import ApiServer from '../../Services/ApiServer';

import { message, Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';


const Page = () => {

    const onFinish = (values) => {
        // console.log('Success:', values);
        // const auth = firebase.getAuth()
        const {email, password, nome, confimarPassword} = values

        
        if(password != confimarPassword) {
            
                message.error('Senhas diferentes');
        } else {
            
            ApiServer.post('users/create',{nome, email, password},{
                'Content-Type': 'application/json'
            })
            .then(e =>{console.log("Usuario cadastrado")})
            .catch(e =>{console.log("falha no Cadastro")})
            // firebase.createUserWithEmailAndPassword(auth, email, password).then(data => {
            //     // console.log(data.user.auth.currentUser)
            //     firebase.updateProfile(data.user.auth.currentUser, {
            //         displayName: nome
            //       }).then(console.log)
            // })
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