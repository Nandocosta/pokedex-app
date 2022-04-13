import React from 'react';

import Cadastro from '../../components/cadastro/Cadastro';
import ApiServer from '../../Services/ApiServer';

import { message} from 'antd';

const Page = () => {

    const onFinish = (values) => {

        const {email, password, nome, confimarPassword} = values
        
        if(password != confimarPassword) {
                message.error('Senhas diferentes');
        } else {
            ApiServer.post('users/create',{nome, email, password},{
                'Content-Type': 'application/json'
            })
            .then(() =>{
                window.location = "/login"
            })
            .catch(e =>{console.log("falha no Cadastro")})
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