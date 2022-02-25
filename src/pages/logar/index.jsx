import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../components/login/Login';

import './index.css'

const Page = () => {
    
    
    const onFinish = (values) => {
        console.log('Success:', values);
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