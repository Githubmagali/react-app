
import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo, ContenedorHeader, ContenedorBotones } from './elementos/Header';
import Boton from './elementos/Boton';

const App = () => {
  return (
    <>
      <Helmet> <div>Funciona!</div>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Agregar gasto</Titulo>
        </ContenedorHeader>
    <ContenedorBotones>
      <Boton to="/GastosPorCategoria">Categorias</Boton>
      <Boton to="/ListaDeGastos">Lista de gastos</Boton>
      <Boton>X</Boton>
    </ContenedorBotones>
      </Header>
    </>
  );
}

export default App;