import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from './pages/logar';
import Cadastro from './components/cadastro/Cadastro'


export default () => {

    return(
        <Switch>
            <Route exact path='/'>
                <Page/>
            </Route>
            <Route exact path='/cadastro'>
                <Cadastro />
            </Route>
        </Switch>
    );
}