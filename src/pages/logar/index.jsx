import React from 'react';
import firebase from '../../firebaseConfig';
import { Link } from 'react-router-dom';
import Login from '../../components/login/Login';

import './index.css'

const Page = () => {

    const onFinish = (values) => {
        // console.log('Success:', values);
        const auth = firebase.getAuth()
        const email = values.email
        const senha = values.senha
        
        firebase.signInWithEmailAndPassword(auth, email, senha).then(user => {
        console.log(user)
        })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Login onFinish={onFinish} onFinishFailed={onFinishFailed}/>
        </div>
    );
}
export default Page;