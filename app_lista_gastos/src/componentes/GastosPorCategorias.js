import React from "react";
import {Header, Titulo} from './../elementos/Header';
import { Helmet } from "react-helmet";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";


const GastosPorCategorias = ()=>{
    return(
      <>
      <Helmet>
        <title>Gastos por categoria</title>
      </Helmet>
  
      <Header>
          <BtnRegresar />
          <Titulo> Gastos por categoria</Titulo>
      
      </Header>
      <BarraTotalGastado />
      </>
    );
  }
  
  export default GastosPorCategorias;