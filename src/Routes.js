import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Page from './pages/logar';
import Cadastrar from './pages/cadastrar';


export default function Routes () {

    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Page}/>
                <Route exact path='/cadastro' component={Cadastrar}/>
            </Switch>
        </Router>
    );
}
