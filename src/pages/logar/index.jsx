import React, { useState, useContext} from 'react';
import firebase from '../../firebaseConfig';

import { AuthContext } from '../../contexts/auth';

import Login from '../../components/login/Login';

import './index.css'

const Page = () => {

    const { authenticated, login } = useContext (AuthContext);
    const [uid, setUid] = useState() 

    const onFinish = (values) => {
        // console.log('Success:', values);
        const auth = firebase.getAuth()
        const uid = values.uid
        const email = values.email
        const password = values.password
        
        firebase.signInWithEmailAndPassword(auth, email, password).then(data => {
        
        // setUid(user.user.uid);
        // // console.log(user)
        login(uid, email, password)
        })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <p>{String(authenticated)}</p>
            <Login onFinish={onFinish} onFinishFailed={onFinishFailed}/>
        </div>
    );
}
export default Page;