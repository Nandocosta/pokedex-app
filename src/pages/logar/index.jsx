import React, { useState, useContext} from 'react';
import firebase from '../../firebaseConfig';

import { AuthContext } from '../../contexts/auth';

import Login from '../../components/login/Login';

import './index.css'


const Logar = () => {

    const { authenticated, login } = useContext (AuthContext);


    const  onFinish = (values) => {
        // console.log('Success:', values);
        const auth = firebase.getAuth()
        const { email, password } = values
        
        firebase.signInWithEmailAndPassword( auth, email, password ).then( data => {
            const { user } = data
            login( user.uid, user.email , user.displayName, password )
            window.location.assign('/')
            
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
export default Logar;