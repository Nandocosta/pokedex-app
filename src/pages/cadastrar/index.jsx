import React, { useState } from 'react';
import firebase from '../../firebaseConfig';

import Cadastro from '../../components/cadastro/Cadastro';

const Page = () => {

    const onFinish = (values) => {
        // console.log('Success:', values);
        const auth = firebase.getAuth()
        const email = values.email
        const senha = values.senha
        
        firebase.createUserWithEmailAndPassword(auth, email, senha).then(user => {
        console.log(user)
        })

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