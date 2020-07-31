import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategria from './pages/cadastro/Categoria'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const pagina404 =  () => (<div>Pagina 404 Not Found</div>)

//Sistema de roteamento
//Browser route representa a rota dos navegadores
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategria} />
      <Route path="/" component={Home} exact />
       <Route path="/" component={pagina404} /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
