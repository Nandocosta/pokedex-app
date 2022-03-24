import React, { useState, useContext} from 'react';
import firebase from '../../firebaseConfig';

import { AuthContext } from '../../contexts/auth';

import Login from '../../components/login/Login';

import './index.css'
import Home from '../home';

const Logar = () => {

    const { authenticated, login } = useContext (AuthContext);


    const  onFinish = (values) => {
        // console.log('Success:', values);
        const auth = firebase.getAuth()
        const { email, password } = values
        
        firebase.signInWithEmailAndPassword( auth, email, password ).then( data => {
            const { user } = data
            login( user.uid, user.email , password )
        })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            authenticated ? <Home/> : <Logar/>
            <Login onFinish={onFinish} onFinishFailed={onFinishFailed}/>
        </div>
    );
}
export default Logar;