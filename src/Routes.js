import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Logar from './pages/logar';
import Cadastrar from './pages/cadastrar';
import Unauthenticated from './pages/Unauthenticated';


import { AuthContext } from './contexts/auth';
import Home from './pages/home';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';

import PokerLikes from './pages/PokerLikes';
import MinhaConta from './pages/MinhaConta';



export default function Routes () {

    const [user, setUser] = useState('')

    const isLoged = () => {
        const userStorage = JSON.parse(localStorage.getItem("Usuario"))
        return !!userStorage
    }

    const login = (data) => { 
        localStorage.setItem( "Usuario", JSON.stringify(data))
        setUser(data)
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
                    <PrivateRouter path="/PokerLikes" >
                        <PokerLikes/>
                    </PrivateRouter>
                    <PrivateRouter path='/MinhaConta' >
                        <MinhaConta/>
                    </PrivateRouter>
                    <Route path='/unauthenticated' component={Unauthenticated}/>
                </Switch>
            </AuthContext.Provider>
        </Router>
    );
}
