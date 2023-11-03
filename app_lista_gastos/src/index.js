import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditarGasto from './componentes/EditarGasto';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import InicioSesion from './componentes/InicioSesion';
import ListaDeGastos from './componentes/ListaDeGastos';
import RegistroUsuarios from './componentes/RegistroUsuarios';
import { Helmet } from "react-helmet";
import favi from './imagenes/logo.png';
import Fondo from './elementos/Fondo';



WebFont.load({
  google: {
    //Work+Sans:wght@100
    families: ['Work Sans:300,400,500', 'sans-serif']
  }
});

const Index = ()=>{
  return(
    <>
    <Helmet>
      <link rel="shortcut icon" href={favi} type="image/x-icon"/>
      <title>Estamos dentro de Helmet!</title>
    </Helmet>

    <BrowserRouter>
    <Contenedor>
      <Routes>
    <Route path="/InicioSesion" element={<InicioSesion/>}/>
    <Route path="/Editar/:id" element={<EditarGasto/>}/>
    <Route path="/GastosPorCategoria" element={<GastosPorCategoria/>}/>
    <Route path="/ListaDeGastos" element={<ListaDeGastos/>}/>
    <Route path="/RegistroUsuarios" element={<RegistroUsuarios/>}/>
    <Route path="/" element={<App/>}/>
    </Routes>
    </Contenedor>
    </BrowserRouter>
    <Fondo/>
    </>
  );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

