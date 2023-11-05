import React from "react";
import {Header, Titulo, ContenedorHeader, ContenedorBotones } from './../elementos/Header';
import { Helmet } from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";


const GastosPorCategoria =()=>{

    return(
        <>
        <Helmet> <h1>Gastos por categoria</h1>
        </Helmet>
  
        <Header>
            <BtnRegresar />
            <Titulo>Gastos por categoria</Titulo>
         
    
        </Header>
      </>
    );
}

export default GastosPorCategoria;

