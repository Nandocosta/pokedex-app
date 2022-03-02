import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Page from './pages/logar';
import Cadastrar from './pages/cadastrar';


import { AuthContext } from './contexts/auth';

export default function Routes () {

    const [user, setUser] = useState('')

    const login = (uid, email, password) => { 
        console.log('login auth', {uid, email, password})

        setUser({ email, password})
    }

    const logout = () => {
        console.log('logout')
    }
    

    return(
        <Router>
            <AuthContext.Provider value={{authenticated: !!user , user, login, logout}}>
                <Switch>
                    <Route exact path='/' component={Page}/>
                    <Route exact path='/cadastro' component={Cadastrar}/>
                </Switch>
            </AuthContext.Provider>
        </Router>
    );
}
