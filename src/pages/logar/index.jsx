import React, { useContext} from 'react';
import { AuthContext } from '../../contexts/auth';

import Login from '../../components/login/Login';
import ApiServer from '../../Services/ApiServer';

// import './index.css'


const Logar = () => {

    const {login } = useContext (AuthContext);

    const  onFinish = (values) => {
        const { email, password } = values

        ApiServer.post("users/logar", {email, password} ).then( response => {
            const {data} = response
            console.log(data?.data)
            login(data?.data)
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