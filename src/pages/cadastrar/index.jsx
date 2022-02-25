import React from 'react';
import { Link } from 'react-router-dom';
import Cadastro from '../../components/cadastro/Cadastro';

const Page = () => {
    
    const onFinish = (values) => {
        console.log('Success:', values);
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