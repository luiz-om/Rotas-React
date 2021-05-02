import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';

//importações
import PaginaInicial from '../PaginaInicial'
import PaginaFrontEnd from '../PaginaFrontEnd'
import PaginaBackEnd from '../PaginaBackEnd'

const Rotas = () =>{
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={PaginaInicial}/>
        <Route path='/front-end' component={PaginaFrontEnd} />
        <Route path='/back-end' component={PaginaBackEnd} />

    </Switch>
    </BrowserRouter>
}