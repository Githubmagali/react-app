import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditarGasto from './componentes/EditarGasto';
import GastosPorCategorias from './componentes/GastosPorCategorias';
import InicioSesion from './componentes/IniciarSesion';
import ListaDeGastos from './componentes/ListaDeGastos';
import RegistroUsuarios from './componentes/RegistroUsuarios';
import { Helmet } from 'react-helmet';
import favicon from './imagenes/login.svg';
import Fondo from './elementos/Fondo';


WebFont.load({
  google: {
    families: ['Roboto wght:400,500,600', 'Droid Serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  return (
    <>
    <Helmet>
      <link rel="shortcut icon" href={favicon} type="image/png" />
      <title>App para gastos</title>
     
    </Helmet>
   
    <BrowserRouter>
    <Contenedor>
      <Routes>
   <Route path="/iniciar-sesion" element={<InicioSesion />}/>
   <Route path="/crear-cuenta" element={<RegistroUsuarios />}/>
   <Route path="/categorias" element={<GastosPorCategorias />}/>
   <Route path="/lista" element={<ListaDeGastos />}/>
   <Route path="/editar/:id" element={<EditarGasto />}/>
   <Route path="/" element={<App />}/>
      </Routes>
      </Contenedor>
    </BrowserRouter>

    <Fondo />
    </>
  
);
};

root.render(<Index />);