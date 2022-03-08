import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Logar from './pages/logar';
import Cadastrar from './pages/cadastrar';
import Unauthenticated from './pages/Unauthenticated';


import { AuthContext } from './contexts/auth';
import Home from './pages/home';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import Login from './components/login/Login';
import PokerLikes from './pages/PokerLikes';
import MinhaConta from './pages/MinhaConta';



export default function Routes () {

    const [user, setUser] = useState('')
    const [value, setValue] = useState('');

    const isLoged = () => {
        const userStorage = JSON.parse(localStorage.getItem("Usuario"))

        return !!userStorage

    
    }

    const login = (uid, email, password) => { 
        const data = { uid, email }

        localStorage.setItem( "Usuario", JSON.stringify(data));

        setUser({ email, password })
    }

    const logout = () => {
        console.log('logout')
    }
    

    return(
        <Router>
            <AuthContext.Provider value={{authenticated: isLoged(), user, login, logout}}>
                <Switch>
                    <Route exact path='/login' component={Logar}/>
                    <Route exact path='/cadastro' component={Cadastrar}/>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/PokerLikes' component={PokerLikes}/>
                    <Route exact path='/MinhaConta' component={MinhaConta}/>
                    <PrivateRouter
                        path="/"
                    >
                        <Home/>
                        <PokerLikes/>
                        <MinhaConta/>
                    </PrivateRouter>
                    <Route path='/unauthenticated' component={Unauthenticated}/>
                </Switch>
            </AuthContext.Provider>
        </Router>
    );
}
